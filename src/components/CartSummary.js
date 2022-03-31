import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { ShoppingContext } from "./App";
import "../styles/CartSummary.scss";
import OrderConfirmation from "./OrderConfirmation";

const CartSummary = () => {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingContext);
  const [oldTotalCost, setOldTotalCost] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const newShoppingCart = [...shoppingCart];
  const totalCost = newShoppingCart.reduce(
    (a, c) => a + c.productPrice * c.count,
    0
  );

  const handleOrderConfirmation = () => {
    setOldTotalCost((" " + totalCost).slice(1));
    setShoppingCart([]);
    setIsActive(true);

  };
  return (
    <div className="cartSummary">
      {isActive && (
        <OrderConfirmation totalCost={oldTotalCost} setIsActive={setIsActive} />
      )}
      {totalCost > 0 && <h2>total: {totalCost}$</h2>}
      {totalCost > 0 && (
        <Button
          className="buttonCartSummary"
          variant="contained"
          onClick={() => handleOrderConfirmation()}
        >
          Order
        </Button>
      )}
    </div>
  );
};

export default CartSummary;
