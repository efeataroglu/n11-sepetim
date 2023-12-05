import {
  CartStyled,
  EmptyHeaderStyled,
  EmptyCartStyled,
  EmptyBasketIconStyled,
  EmptyBtnStyled,
} from "./styled/Cart/EmptyCart.styled";

const EmptyCart = () => {
  const handleLinkClick = () => {
    window.location.reload();
  };
  return (
    <>
      <CartStyled>
        <EmptyHeaderStyled>
          <EmptyCartStyled>Sepetin Boş Görünüyor</EmptyCartStyled>
          <EmptyBasketIconStyled src="./empty-basket.svg" alt="" />
          <EmptyBtnStyled href="#" onClick={handleLinkClick}>
            Hemen Alışveriş Yap
          </EmptyBtnStyled>
        </EmptyHeaderStyled>
      </CartStyled>
    </>
  );
};

export default EmptyCart;
