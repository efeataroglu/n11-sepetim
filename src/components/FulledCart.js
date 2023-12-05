import { clearCart } from "../features/cart/cartSlice";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";

import {
  CartStyled,
  CartTotalStyled,
  AllClearBtnStyled,
} from "./styled/Cart/FulledCart.styled";

const FulledCart = () => {
  const dispatch = useDispatch();
  const { data, total, amount } = useSelector((store) => store.cart);

  const formattedPrice = new Intl.NumberFormat("tr-TR").format(total);
  return (
    <>
      <CartStyled>
        <header>
          <h4>Sepetiniz</h4>
        </header>
        <div>
          {data.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <footer>
          <hr />
          <CartTotalStyled>
            <h4>
              Toplam Tutar: <span>₺{formattedPrice}</span>
            </h4>
          </CartTotalStyled>
          <AllClearBtnStyled onClick={() => dispatch(clearCart())}>
            Sepeti Temizle
          </AllClearBtnStyled>
        </footer>
      </CartStyled>
    </>
  );
};

export default FulledCart;
