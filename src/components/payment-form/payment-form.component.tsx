import { useState, FormEvent } from "react";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { StripeCardElement, StripePaymentElementOptions } from "@stripe/stripe-js";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { SelectCurrentUser } from "../../store/user/user.selector";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { PaymentFormContainer, FormContainer, PaymentButton } from "./payment-form.styles";

import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement => card !== null;

// const CARD_ELEMENT_OPTIONS = {
//     style: {
//       base: {
//         color: "#32325d",
//         fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
//         fontSmoothing: "antialiased",
//         fontSize: "16px",
//         "::placeholder": {
//           color: "#aab7c4",
//         },
//       },
//       invalid: {
//         color: "#fa755a",
//         iconColor: "#fa755a",
//       },
//     },
//   };

const PaymentForm = () => {

    const [isPaymentLoading, setIsPaymentLoading] = useState(false)

    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
      });

    const handleInputChange = (evt: any) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputFocus = (evt: any) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
    }
    

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

    const paymentElementOptions: StripePaymentElementOptions = {
        layout: "tabs"
      }
    

    return (
        <PaymentFormContainer>
            <div>
                <h5>Please kindly use the test credit card details for payment</h5>
                <p>Card number : 4242424242424242</p>
                <p>MM / YY : Any date in the future</p>
                <p>CVC : Any 3 digits</p>
                <p>ZIP : Any 5 digits</p>
            </div>
            <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                // focused={state.focus}
            />
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment :</h2>
                {/* <CardElement options={CARD_ELEMENT_OPTIONS} className="card" /> */}
                {/* <PaymentElement options={paymentElementOptions} /> */}
                <input
                    type="number"
                    name="number"
                    placeholder="Card Number"
                    value={state.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <input
                    type="number"
                    name="expiry"
                    placeholder="MM / YY"
                    value={state.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <input
                    type="number"
                    name="cvc"
                    placeholder="CVC"
                    value={state.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <PaymentButton isLoading={isPaymentLoading} buttonTypes={BUTTON_TYPE_CLASSES.inverted}>Pay now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;