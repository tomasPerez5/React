import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const clear = () => {
    Swal.fire({
      title: "queres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado exitosamente", "", "success");
      } else if (result.isDenied) {
      }
    });
  };

  if (orderId) {
    return (
      <div>
        <h2>Gracias por su compra</h2>
        <h4>su comprobante es: {orderId}</h4>
        <Link to="/">Seguir comprando</Link>
      </div>
    );
  }

  return (
    <div>
      {!showForm ? (
        <div className="cart-container">
          <div className="container-items">
            {cart.map((item) => {
              return (
                <div key={item.id} className="cart-item">
                  <img src={item.img} alt="" />
                  <div className="cart-item-info">
                    <h2>${item.price}</h2>
                    <h2>{item.title}</h2>
                    <h2>x{item.quantity} u</h2>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => deleteProductById(item.id)}
                    >
                      borrar
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cart-info">
          <h1 style={{textAlign:"center"}}>TOTAL : ${getTotalPrice()}</h1>
              <div className="btn-cart">
                <Button variant="contained" onClick={() => setShowForm(true)}>
                  Pagar
                </Button>
                <Button onClick={clear} variant="contained">
                  Vaciar
                </Button>
              </div>
          </div>
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;
