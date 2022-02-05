import React, { useState, useEffect } from "react";
import { NavBar, Products } from "./components";
import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setproducts] = useState([]);
  const [cart, setCart] = useState({});

  const fecthProducts = async () => {
    const { data } = await commerce.products.list();
    setproducts(data);
  };

  const fecthCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    // Here I'm setting the cart after the item have been added to the cart
    setCart(item.cart);
  };
  useEffect(() => {
    fecthProducts();
    fecthCart();
  }, []);

  // At this point I can access the producs fecthProducts have been called
  console.log(products);
  console.log(cart);

  return (
    <div>
      <NavBar cart_Total={cart.total_items} />
      <Products products={products} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;
