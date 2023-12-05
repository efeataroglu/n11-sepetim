import styled from "styled-components";

export const CartStyled = styled.section`
  min-height: calc(100vh - 120px);
  width: 90vw;
  margin: 0 auto;
  margin-top: 40px;
  padding: 2.5rem 0;
  max-width: ${({ theme }) => theme.container.fixedWidth};

  h2 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

export const EmptyHeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
`;

export const EmptyCartStyled = styled.h4`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.SlateGray};
  margin-top: 1rem;
  text-align: center;
`;

export const EmptyBasketIconStyled = styled.img`
  margin-top: 3em;
  height: 20em;
`;

export const EmptyBtnStyled = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.PlumpPurple};
  color: #fff;
  text-decoration: none !important;
  border: 1px solid ${({ theme }) => theme.colors.PlumpPurple};
  cursor: pointer;
  padding: 10px 70px;
  border-radius: 9px;
  margin: 0 auto;
  margin-top: 30px;
`;
