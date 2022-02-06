import React, { useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Divider,
  Button,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import PaymentForm from "./CheckoutForms/PaymentForm";
import AddressForm from "./CheckoutForms/AddressForm";

const Checkout = () => {
  // Notes: Confirmation can only be seen when activeSteps = 2
  const [activeSteps, setActiveSteps] = useState(0);

  // Here I steps.lenght to render confirmation form
  const steps = ["Shipping Address", "Payment details"];
  const classes = useStyles();

  // Functional components to return base on our current steps

  const Form = () => (activeSteps === 0 ? <AddressForm /> : <PaymentForm />);

  // Will use confirmation form when the length of activeSteps === steps.length

  const Confirmation = () => <h1>Confirmation</h1>;

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper>
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

          {activeSteps === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
