import Commerce from "@chec/commerce.js";

// This allow me to create a new instance of my Ecommerce from Ecommerce js With every User.
// The boolean values of true means creating a new Store everytime
export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);
