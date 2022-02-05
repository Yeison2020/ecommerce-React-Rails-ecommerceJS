import React, { useState, useEffect } from "react";
import { NavBar, Products } from "./components";
import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setproducts] = useState([]);

  const fecthProducts = async () => {
    const { data } = await commerce.products.list();
    setproducts(data);
  };
  useEffect(() => {
    fecthProducts();
  }, []);

  // At this point I can access the producs fecthProducts have been called
  console.log(products);

  return (
    <div>
      <NavBar />
      <Products products={products} />
    </div>
  );
};

export default App;
