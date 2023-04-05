import { BsCart3 } from "react-icons/bs";
import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

  const { getTotalQuantity } = useContext( CartContext )

  const total = getTotalQuantity()

  return (
    <Link to="/cart">
      <div className="container-cart">
        <BsCart3
          style={{
            fontSize: "3rem",
            color: "white",
          }}
        />
        <div className="bubble-counter" style={{color: "white",style: "none"}}>
          <span style={{textDecoration:"none"}}>{total}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;