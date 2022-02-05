import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyle from "./styles";

const Cart = () => {
  const classes = useStyle();
  const isEmpty = true;

  // Function Containing JXS as Their return values
  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}></Grid>
      </>
    );
  };
  const EmptyCart = () => {
    return (
      <Typography variant="h6">
        Please Start adding Items to your shopping Cart
      </Typography>
    );
  };

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant="h5" className={classes.title}>
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
