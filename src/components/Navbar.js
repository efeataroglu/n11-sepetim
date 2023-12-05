import { CartIcon } from "../Theme/icons";
import { useSelector } from "react-redux";

import {
  NavStyled,
  NavCenter,
  NavLogo,
  NavContainer,
  NavAmountContainer,
  NavTotalAmount,
} from "./styled/Navbar/Navbar.styled";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <NavStyled>
      <NavCenter>
        <NavLogo>
          <img src="./logo.svg" alt="Logo" />
        </NavLogo>

        <NavContainer>
          <CartIcon />
          <NavAmountContainer>
            <NavTotalAmount>{amount}</NavTotalAmount>
          </NavAmountContainer>
        </NavContainer>
      </NavCenter>
    </NavStyled>
  );
};
export default Navbar;
