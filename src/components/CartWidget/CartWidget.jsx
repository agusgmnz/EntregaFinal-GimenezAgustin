import React from "react";
import carritoLogo from "../../img/carrito.png";

const CartWidget = () => {
  return (
    <div>
      <img src={carritoLogo} alt="carrito" /> 0
    </div>
  );
};

export default CartWidget;
