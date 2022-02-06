import React from "react";
import { Typography, Divider, Button } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementConsumer,
} from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";

const PaymentForm = ({ checkoutToken, shippingData, backStep }) => {
  return (
    <>
      <Review checkoutToken={checkoutToken} />
    </>
  );
};

export default PaymentForm;
