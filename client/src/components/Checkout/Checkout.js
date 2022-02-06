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

const Checkout = () => {
  const [activeSteps, setActiveSteps] = useState(0);
  const steps = ["Shipping Address", "Payment details"];
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper>
          <Typography variant="h4" align="center">
            Check out
          </Typography>
          <Stepper activeStep={activeSteps} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
