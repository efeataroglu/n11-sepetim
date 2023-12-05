import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";
import { ThemeProvider } from "styled-components";
import theme from "./Theme/theme";
import GlobalStyles from "./Theme/global";

function App() {
  const { data } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [data]);

  return (
    <ThemeProvider theme={theme}>
      <main>
        <GlobalStyles />
        <Navbar />
        <CartContainer />
      </main>
    </ThemeProvider>
  );
}
export default App;
