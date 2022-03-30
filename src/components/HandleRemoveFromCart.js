import { Button } from "@mui/material";
import { useContext } from "react";
import { ShoppingContext } from "./App";

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
      console.log(index);
      newShoppingCart[index].count = newShoppingCart[index].count - 1;
      setShoppingCart(newShoppingCart);
    }
  };

  return (
    <Button
      className="button"
      variant="contained"
      onClick={() => handleRemoveFromCart(id, count)}
    >
      X
    </Button>
  );
};
export default HandleRemoveFromCart;
