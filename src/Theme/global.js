import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.SlateGray};
  line-height: 1.5;
  font-size: 0.875rem;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
  display: block;
}
h1,
h2,
h3,
h4 {
  letter-spacing: ${({ theme }) => theme.fonts.spacing};
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
  
.btn {
  text-transform: capitalize;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.375rem 0.75rem;
  letter-spacing: ${({ theme }) => theme.fonts.spacing};
  display: inline-block;
  font-weight: 700;
  transition: ${({ theme }) => theme.animation.transition};
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
.btn:hover {
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primaryLight};
}

`;

export default GlobalStyles;
