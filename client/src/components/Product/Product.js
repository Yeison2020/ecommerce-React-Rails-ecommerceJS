import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import loading from "../../assets/Loading-image.png";

const Product = ({ product, handleAddToCart }) => {
  // This the reommended way to extract those Elements from products props
  console.log(product);
  const { image } = product;
  console.log(image.url);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image.url}
        title={product.name}
      ></CardMedia>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h6">{product.name}</Typography>

          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          variant="h6"
          color="textSecondary"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton arial-label="Add to Cart">
          <AddShoppingCart onClick={() => handleAddToCart(product.id, 1)} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
