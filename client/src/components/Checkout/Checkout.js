import React, { useState, useEffect } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Divider,
  Button,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import PaymentForm from "./CheckoutForms/PaymentForm";
import AddressForm from "./CheckoutForms/AddressForm";
import { commerce } from "../../lib/commerce";

const Checkout = ({ cart, order, handleCaptureCheckout, errorMessage }) => {
  // Notes: Confirmation can only be seen when activeSteps = 2
  const [activeSteps, setActiveSteps] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setshippingData] = useState({});

  // Creating a checkoutTokenID

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
        console.log(token);
      } catch (error) {}
    };
    generateToken();
  }, [cart]);

  // Here I steps.lenght to render confirmation form
  const steps = ["Shipping Address", "Payment details"];
  const classes = useStyles();

  // Functional components to return base on our current steps

  const nextStep = () => setActiveSteps((prev) => prev + 1);
  const backStep = () => setActiveSteps((prev) => prev - 1);

  const next = (data) => {
    setshippingData(data);
    // This funtion reach the lenght of active steps
    nextStep();
  };

  // When React renders: JSX render first and useEffect after, so I need to get my checkoutToken first and then <Form/>. Bug fixed : checkoutToken={checkoutToken}
  const Form = () =>
    activeSteps === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        handleCaptureCheckout={handleCaptureCheckout}
        shippingData={shippingData}
        backStep={backStep}
        checkoutToken={checkoutToken}
        nextStep={nextStep}
      />
    );

  // Will use confirmation form when the length of activeSteps === steps.length

  // Classes.paper == give me a margin around my paper tag.

  const Confirmation = () => <h1>Confirmation</h1>;

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h5" align="center">
            Check out
          </Typography>
          <Stepper activeStep={activeSteps} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeSteps === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
