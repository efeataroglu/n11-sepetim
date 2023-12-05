import styled from "styled-components";

export const NavStyled = styled.nav`
  background: ${({ theme }) => theme.colors.PlumpPurple};
  padding: 1.25rem 2rem;
  h3 {
    margin-bottom: 0;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.white};
  }
  svg {
    width: 40px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const NavCenter = styled.div`
  max-width: ${({ theme }) => theme.container.fixedWidth};
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow};
  padding: 5px 20px;
  border-radius: 99px 1px 1px 99px;
`;

export const NavContainer = styled.div`
  display: block;
  position: relative;
`;

export const NavAmountContainer = styled.div`
  position: absolute;
  top: -0.6rem;
  right: -0.6rem;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primaryLight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavTotalAmount = styled.p`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0;
  font-size: 1.25rem;
`;
