import React from "react";
import Grid from "@material-ui/core";
import useStyles from "./styles";
import Product from "../Product/Product";
const products = [
  {
    id: 1,
    name: "Android Phone",
    description: "Best on the market",
  },
  {
    id: 1,
    name: "Iphone Phones",
    description: "Highh quality",
  },
];
const Products = () => {
  const classes = useStyles();
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
