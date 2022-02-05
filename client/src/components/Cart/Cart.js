import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyle from "./styles";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart, handleAddToCart, handleRemoveFromCart }) => {
  const classes = useStyle();

  // If cart.line_items.length > 0 = true : isEmpty = false
  // If cart.line_items.length > 0 = false : isEmpty = true

  // Function Containing JXS as Their return values
  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        You have not Items in your shopping cart start adding some!, &nbsp;
        <NavLink to="/" exact="true" end={true} className={classes.link}>
          Start adding some Items
        </NavLink>
      </Typography>
    );
  };
  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items?.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem
                item={item}
                handleRemoveFromCart={handleRemoveFromCart}
                handleAddToCart={handleAddToCart}
              />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h4">
            Subtotal:{cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
            >
              Empty Cart
            </Button>
            <Button
              className={classes.checkoutButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Check out
            </Button>
          </div>
        </div>
      </>
    );
  };

  if (!cart.line_items) return "Loading...";
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant="h5" className={classes.title}>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
