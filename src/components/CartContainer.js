import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import FulledCart from "./FulledCart";

const CartContainer = () => {
  const { amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return <EmptyCart />;
  }
  return <FulledCart />;
};

export default CartContainer;
