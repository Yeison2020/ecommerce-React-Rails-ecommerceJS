import React from "react";
import { Typography, Divider, Button } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";

const PaymentForm = ({
  checkoutToken,
  shippingData,
  backStep,
  handleCaptureCheckout,
  nextStep,
}) => {
  const API_STRING = `"${process.env.STRIPE_PUBLIC_KEY}"`;
  const stripePromise = loadStripe(API_STRING);
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    // Here is how get the values from my card using elements.getElement(CardElement);
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippingData.firstname,
          lastname: shippingData.lastname,
          email: shippingData.email,
          shipping: {
            name: "Primary",
            street: shippingData.address1,
            town_city: shippingData.city,
            county: shippingData.shippingSubdivision,
            postal_zip_code: shippingData.zip,
            country: shippingData.shippingCountry,
          },
          fullfillment: {
            shipping_method: shippingData.shippingOption,
          },
          payment: {
            gateway: "stripe",
            stripe: {
              payment_method_id: paymentMethod.id,
            },
          },
        },
      };

      handleCaptureCheckout(checkoutToken.id, orderData);
      nextStep();
    }
  };
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />

      <Typography variant="h6" gutterBottom style={{ margin: "15px 0" }}>
        Payment Method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br />
              <br />

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" onClick={backStep}>
                  Back
                </Button>
                <Button
                  variant="outlined"
                  disabled={!stripe}
                  color="primary"
                  type="submit"
                >
                  Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
