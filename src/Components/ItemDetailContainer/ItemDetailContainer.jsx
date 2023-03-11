import React from "react";

import { useParams } from "react-router-dom";

import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad} productos `);
  };

  return (
    <div>
      <h1>{productSelected.title}</h1>
      <img
        style={{ height: "450px", marginLeft: "40vw" }}
        src={productSelected.img}
        alt=""
      />
      <div style={{ textAlign: "center", justifyContent: "center" }}>  
      <ItemCount stock={productSelected.stock} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
