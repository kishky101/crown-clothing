import { useState, FormEvent } from "react";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { StripeCardElement, StripePaymentElementOptions } from "@stripe/stripe-js";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { SelectCurrentUser } from "../../store/user/user.selector";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { PaymentFormContainer, FormContainer, PaymentButton, CreditCard, CardNumber, ExpiryDate, Cvc, Chip } from "./payment-form.styles";
import CardChip from '../../assets/credit-card-chip.png'

const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement => card !== null;


const PaymentForm = () => {

    const [isPaymentLoading, setIsPaymentLoading] = useState(false)
    

    const stripe = useStripe();
    const elements = useElements();

    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(SelectCurrentUser);

    const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsPaymentLoading(true)

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then(res => res.json());

        const {paymentIntent: { client_secret }} = response

        //console.log(client_secret)
        const cardDetails = elements.getElement(CardElement);

        if (!ifValidCardElement(cardDetails)) return;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: cardDetails,
                billing_details: {
                    name: currentUser? currentUser.displayName : 'Guest'
                }
            }
        })

        setIsPaymentLoading(false)

        if (paymentResult.error) {
            alert(paymentResult.error)
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful')
            }
        }
    };

    

    return (
        <PaymentFormContainer>
            <article>
                <h5>Please kindly use the test credit card details for payment</h5>
                <CreditCard>
                    <Chip src={CardChip} alt='chip' />
                    <CardNumber><span>4242</span> <span>4242</span> <span>4242</span> <span>4242</span></CardNumber>
                    <ExpiryDate>
                        <p><span>Valid Thru</span> <span>04 / 26</span></p>
                    </ExpiryDate>
                    <Cvc>
                        <p><span>CVC</span> <span>343</span> </p>
                    </Cvc>
                    {/* <p>ZIP : Any 5 digits</p> */}
                </CreditCard>
            </article>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment</h2>
                <CardElement className="card" />
                {/* <PaymentElement  /> */}
                <PaymentButton isLoading={isPaymentLoading} buttonTypes={BUTTON_TYPE_CLASSES.inverted}>Pay now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;