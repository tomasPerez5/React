import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase";


const FormCheckout = ({ cart,  getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.name.length < 3) {
      setError(true);
      setErrorMessage("El nombre no puede ser menor a 3 carácteres")
      return;

    }    if (userData.phone.length < 8) {
      setError(true);
      setErrorMessage("Ingrese un número válido")
      return;
    }

    const incluye = userData.email.includes("@");

    if (!incluye) {
      setError(true);
      setErrorMessage("El Email debe contener @")
      return;
    }


    let total =  getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };

    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => {
        console.log(err);
      });

    let refDoc;
    
    cart.map((product) => (
    refDoc = doc(db, "products", product.id),
    updateDoc(refDoc, { stock: product.stock - product.quantity })
    ));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            margin: "auto",
            width:"500px",
            height:"700px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius:"20px"
          }}
        >
          <Input
            style={{ margin: "10px" }}
            type="text"
            placeholder="Nombre"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          ></Input>
          <Input
            style={{ margin: "10px" }}
            type="text"
            placeholder="Telefono"
            value={userData.phone}
            onChange={(e) =>
              setUserData({ ...userData, phone: e.target.value })
            }
          ></Input>
          <Input
            style={{ margin: "10px" }}
            type="text"
            placeholder="Email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          ></Input>
          <Button style={{ margin: "10px" }} variant="contained" type="submit">
            Comprar
          </Button>
          
      {error && <h3>{errorMessage}</h3>}
        </div>
      </form>
    </div>
  );
};

export default FormCheckout;