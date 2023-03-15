import renderer from 'react-test-renderer';
import PaymentForm from './payment-form.component';
import { MockStore } from '../../utils/test/setup';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../../utils/stripe/stripe.utils';

test('creating payment-form snapshot', () => {
    const paymentform = renderer.create(
        <MockStore>
            <Elements stripe={stripePromise}>
                <PaymentForm />
            </Elements>
        </MockStore>
    ).toJSON
    expect(paymentform).toMatchSnapshot();
})