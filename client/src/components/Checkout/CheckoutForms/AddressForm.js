import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
const AddressForm = ({ checkoutToken, next, backStep }) => {
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
  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );

  const options = shippingOptions.map((shippingOptions) => ({
    id: shippingOptions.id,
    label: `${shippingOptions.description} - ${shippingOptions.price.formatted_with_symbol}`,
  }));

  const fecthShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    console.log(countries);
    setshippingCountries(countries);
    setshippingCountry(Object.keys(countries)[0]);
  };

  const fecthSubdivision = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setshippingSubdivisions(subdivisions);
    setshippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );

    setshippingOptions(options);
    setshippingOption(options[0].id);
  };
  // useEffect when address form renders
  useEffect(() => {
    fecthShippingCountries(checkoutToken.id);
    console.log(shippingCountries);
  }, []);
  console.log(shippingCountry);

  // renders when I get the value of my countries selected

  useEffect(() => {
    if (shippingCountry) fecthSubdivision(shippingCountry);
  }, [shippingCountry]);
  console.log(shippingSubdivision);
  //

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  console.log(methods);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            })
          )}
        >
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
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select
                value={shippingSubdivision}
                fullWidth
                onChange={(e) => setshippingSubdivision(e.target.value)}
              >
                {subdivisions.map((subdivision) => (
                  <MenuItem key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select
                value={shippingOption}
                fullWidth
                onChange={(e) => setshippingOption(e.target.value)}
              >
                {options.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" component={NavLink} to="/cart">
              Back to cart
            </Button>
            <Button variant="outlined" type="submit" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
