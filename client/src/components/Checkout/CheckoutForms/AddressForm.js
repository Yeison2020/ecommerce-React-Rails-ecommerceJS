import React, { useState, useEffect } from "react";
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
// Fetch Al feautures from commerce
import { commerce } from "../../../lib/commerce";
const AddressForm = ({ checkoutToken }) => {
  // Setting the state as soon address form renders
  // 1 Countries
  const [shippingCountries, setshippingCountries] = useState([]);
  const [shippingCountry, setshippingCountry] = useState("");
  // Subdivision
  const [shippingSubdivisions, setshippingSubdivisions] = useState([]);
  const [shippingSubdivision, setshippingSubdivision] = useState("");
  // Options
  const [shippingOptions, setshippingOptions] = useState([]);
  const [shippingOption, setshippingOption] = useState("");
  // Methods allow me to have access to all methods under UseFrom from reactForm like setting states and getting their values and just need to pass this values to my formInput and no need to handle states just pass Its props like name and label
  const methods = useForm();

  let fecthShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    console.log(countries);
    setshippingCountries(countries);
    setshippingCountry(Object.keys(countries));
  };

  useEffect(() => {
    fecthShippingCountries(checkoutToken.id);
    console.log(shippingCountries);
  }, []);
  console.log(shippingCountry);

  //

  const countries = Object.entries(shippingCountries).map((code, name) => ({
    id: code,
    label: name,
  }));
  console.log(countries);

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

          <Grid item xs={12} sm={6}>
            <InputLabel>Shipping Country</InputLabel>
            <Select
              value={shippingCountry}
              fullWidth
              onChange={(e) => {
                setshippingCountry(e.target.value);
              }}
            >
              {}
              <MenuItem key={""} value={""}>
                Select me 1
              </MenuItem>
            </Select>
          </Grid>
          {/*   <Grid item xs={12} sm={6}>
            <InputLabel>Shipping Subdivision</InputLabel>
            <Select value={""} fullWidth onChange={""}>
              <MenuItem key={""} value={""}>
                Select me 2
              </MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Shipping Options</InputLabel>
            <Select value={""} fullWidth onChange={""}>
              <MenuItem key={""} value={""}>
                Select me 3
              </MenuItem>
            </Select>
          </Grid> */}
        </Grid>
      </FormProvider>
    </>
  );
};

export default AddressForm;
