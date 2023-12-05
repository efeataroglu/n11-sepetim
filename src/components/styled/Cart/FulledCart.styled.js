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

  h4 {
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  footer {
    margin-top: 4rem;
    text-align: center;
  }
`;

export const CartTotalStyled = styled.div`
  h4 {
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
`;

export const AllClearBtnStyled = styled.button`
  background: transparent;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin-top: 2.25rem;
  border-radius: ${({ theme }) => theme.fonts.radius};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.primaryDark};
    cursor: pointer;
  }
`;
