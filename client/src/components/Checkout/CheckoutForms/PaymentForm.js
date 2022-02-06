import React from "react";
import { Typography, Divider, Button } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementConsumer,
} from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";
const stripePromise = loadStripe("");

const PaymentForm = ({ checkoutToken, shippingData, backStep }) => {
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />

      <Typography variant="h6" gutterBottom style={{ margin: "15px 0" }}>
        Payment Method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementConsumer>
          {({ elements, stripe }) => (
            <form>
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
        </ElementConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
