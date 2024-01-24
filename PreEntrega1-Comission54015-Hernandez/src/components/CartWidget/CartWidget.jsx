import React from "react";
import { BsCart } from "react-icons/bs";
import { useState } from "react";
import style from "../CartWidget/CartWidget.module.css";
const CartWidget = () => {
  const [count, setCount] = useState(2);
  return (
    <div className="container">
      <button className={style.cartRight}>
        <BsCart className={style.cartRight} />
        <strong>{count}</strong>
      </button>
    </div>
  );
};

export default CartWidget;
