import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <div>
        <span>0</span>
        <BsCart3 size={45} color="white" />
      </div>
    </Link>
  );
};

export default CartWidget;
