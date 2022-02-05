import React from "react";
import { NavBar, Products } from "./components";
import { commerce } from "./lib/commerce";

const App = () => {
  return (
    <div>
      <NavBar />

      <Products />
    </div>
  );
};

export default App;
