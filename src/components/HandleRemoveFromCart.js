import { Button } from "@mui/material";
import { useContext } from "react";
import { ShoppingContext } from "../App";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a5b3b0',
    },
  },
});

const HandleRemoveFromCart = ({id,count}) => {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingContext);
  const handleRemoveFromCart = (id, count) => {
    let newShoppingCart = [...shoppingCart];
    if (count === 1) {
      const filteredShoppingCart = newShoppingCart.filter(
        (item) => item.id !== id
      );
      setShoppingCart(filteredShoppingCart);
    } else {
      const index = newShoppingCart.findIndex((item) => item.id === id);
      newShoppingCart[index].count = newShoppingCart[index].count - 1;
      setShoppingCart(newShoppingCart);
    }
  };

  return (
    <ThemeProvider theme={theme}>

    <Button
      className="button"
      variant="contained"
      onClick={() => handleRemoveFromCart(id, count)}
    >
      <span className="span">X</span>
    </Button>
    </ThemeProvider>
  );
};
export default HandleRemoveFromCart;
