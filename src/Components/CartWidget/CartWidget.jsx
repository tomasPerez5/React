import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
      <span>0</span>
      <BsCart3 size={45} color="white" />
    </div>
  );
};

export default CartWidget;
