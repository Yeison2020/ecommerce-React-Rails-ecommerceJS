import React from "react";
import useStyles from "./styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  MenuItem,
  Menu,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/logo-general.jfif";
import { NavLink } from "react-router-dom";

const NavBar = ({ cart_Total }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={NavLink}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Ecommerce RD"
              height="25px"
              className={classes.image}
            />
            Ecommerce RD
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton
              aria-label="Show Cart Items"
              color="inherit"
              component={NavLink}
              to="/cart"
            >
              <Badge badgeContent={cart_Total} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
