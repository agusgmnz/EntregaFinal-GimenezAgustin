import React from "react";
import carritoLogo from "../../img/carrito.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const CartWidget = () => {

  const {cartItems} = useContext(CartContext);

  return (
    <div>
      <img src={carritoLogo} alt="carrito" /> 
      <strong> {cartItems} </strong>
    </div>
  );
};

export default CartWidget;
