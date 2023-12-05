import styled from "styled-components";

export const CartItemStyled = styled.article`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;

  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }

  h4 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    letter-spacing: 2px;
  }
`;

export const ItemPriceStyled = styled.h4`
  color: ${({ theme }) => theme.colors.SlateGray};
`;

export const RemoveBtnStyled = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: ${({ theme }) => theme.fonts.spacing};
  cursor: pointer;
  font-size: 0.85rem;
  background: transparent;
  border: none;
  margin-top: 0.375rem;
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const AmountBtnStyled = styled.button`
  width: 24px;
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover svg {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const AmountStyled = styled.p`
  text-align: center;
  margin-bottom: 0;
  font-size: 1.25rem;
  line-height: 1;
`;
