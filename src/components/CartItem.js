import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { ChevronDown, ChevronUp } from "../Theme/icons";

import {
  CartItemStyled,
  ItemPriceStyled,
  RemoveBtnStyled,
  AmountBtnStyled,
  AmountStyled,
} from "./styled/Cart/CartItem.styled";

const CartItem = ({ id, img, title, price, amount }) => {
  const formattedPrice = new Intl.NumberFormat("tr-TR").format(price);

  const dispatch = useDispatch();
  return (
    <CartItemStyled>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <ItemPriceStyled>₺{formattedPrice}</ItemPriceStyled>
        <RemoveBtnStyled onClick={() => dispatch(removeItem(id))}>
          Ürünü Sil
        </RemoveBtnStyled>
      </div>
      <div>
        <AmountBtnStyled onClick={() => dispatch(increase({ id }))}>
          <ChevronUp />
        </AmountBtnStyled>
        <AmountStyled>{amount}</AmountStyled>
        <AmountBtnStyled
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </AmountBtnStyled>
      </div>
    </CartItemStyled>
  );
};

export default CartItem;
