import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Product from "../Product/Product";
const products = [
  {
    id: 1,
    name: "Android Phone",
    description: "Best on the market",
    price: "$10,000",
    image:
      "https://media.wired.com/photos/6000ef46c724a79925642473/master/w_2394,h_1795,c_limit/Gear-Samsung-Galaxy-S21-colorways-SOURCE-Samsung.jpg.jpg",
  },
  {
    id: 1,
    name: "Iphone Phones",
    description: "Highh quality",
    price: "$10,000",
    image:
      "https://www.att.com/idpassets/global/devices/phones/apple/iphone-11/carousel/black/iPhone_11_Black_carousel.png",
  },
];
const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
