import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButtom,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Product = ({ product }) => {
  const { name } = product;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image="" title={name}></CardMedia>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom></Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Product;
