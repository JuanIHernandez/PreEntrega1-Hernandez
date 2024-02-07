import React, { useEffect, useState } from "react";
import style from "../../components/ItemListContainer/ItemListContainer.module.css";
import Product from "../Product/Product";
import { requestData } from "../../MockData/asyncMock";

const ItemListContainer = (props) => {
  //const promise = (resolve, reject) => {};
  // const promiseTask = new promise((resolve, reject) => {
  //   //resolve("todo bien");
  //   setTimeout(() => {
  //     resolve("todo bien");
  //   }, 1000);
  //   //reject("todo mal");
  // });
  const [products, setProducts] = useState([]);
  console.log(products);
  /*useEffect(() => {
    requestData()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.log(err))
      .finnally(() => {
        console.log("termino");
      });
  }, []);
  */

  return (
    <div className={style.center}>
      <div>
        <h2 className={style.message}>{props.greetingMessage}</h2>
      </div>
      <div className={style.center}>
        <Product
          img="https://http2.mlstatic.com/D_NQ_NP_898303-MLA31351510495_072019-O.webp"
          message="Hola"
          description="Esto es un cuhcillo"
          price="100"
        />
        <Product
          img="https://cruzdemalta.es/wp-content/uploads/2021/06/cuchara-postre-6.jpg"
          message="Y"
          description="Estos es un tenedor"
          price="400"
        />
        <Product
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR224a5hz5KV1qdyqiq2MCPVX8nmolcC4Tdg&usqp=CAU"
          message="Pero"
          description="Esto es una cucharaS"
          price="200"
        />
      </div>
    </div>
  );
};

export default ItemListContainer;
