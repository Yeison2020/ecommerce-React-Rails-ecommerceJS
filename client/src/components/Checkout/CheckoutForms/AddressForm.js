import React from "react";
import {
  InputLabel,
  Select,
  Typography,
  MenuItem,
  Button,
  Grid,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import CustomTextField from "./CustomTextField";

const AddressForm = () => {
  // Methods allow me to have access to all methods under UseFrom from react like setting states and getting their values and just need to pass this values to my formInput and no need to handle states just pass Its props like name and label
  const methods = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(methods);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit} />
        <Grid container spacing={3}>
          <CustomTextField name="firstName" label="First name" />
          <CustomTextField name="lastname" label="Last name" />
          <CustomTextField name="address1" label="Address" />
          <CustomTextField name="email" label="Email" />
          <CustomTextField name="city" label="City" />
          <CustomTextField name="Zip" label="ZIP / Postal code" />
        </Grid>
      </FormProvider>
    </>
  );
};

export default AddressForm;
