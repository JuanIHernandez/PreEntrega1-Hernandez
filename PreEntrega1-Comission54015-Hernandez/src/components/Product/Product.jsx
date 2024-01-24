import React from "react";
import style from "../Product/Product.module.css";
const Product = (props) => {
  return (
    <div className={style.center}>
      <h1>{props.message}</h1>
      <p>{props.description}</p>
      <p>y cuesta {props.price} peso</p>
      <img src={props.img} width="200px" height="100px"></img>
    </div>
  );
};

export default Product;
