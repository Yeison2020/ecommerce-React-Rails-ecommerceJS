import React, { useState, useEffect } from "react";
import { NavBar, Products, Cart, Checkout } from "./components";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  const handleUpdateCartQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, {
      quantity: quantity,
    });
    setCart(cart);
    console.log(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };
  useEffect(() => {
    fecthProducts();
    fecthCart();
  }, []);

  // At this point I can access the producs fecthProducts have been called
  console.log(products);
  console.log(cart);

  return (
    <Router>
      <div>
        <NavBar cart_Total={cart.total_items} />
        <Routes>
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleAddToCart={handleUpdateCartQuantity}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            }
          ></Route>
          <Route
            path="/"
            element={
              <Products products={products} handleAddToCart={handleAddToCart} />
            }
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
