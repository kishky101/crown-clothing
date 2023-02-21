import { useState, FormEvent } from "react";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { SelectCurrentUser } from "../../store/user/user.selector";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { PaymentFormContainer, FormContainer, PaymentButton } from "./payment-form.styles";

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
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment :</h2>
                <CardElement />
                <PaymentButton isLoading={isPaymentLoading} buttonTypes={BUTTON_TYPE_CLASSES.inverted}>Pay now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;