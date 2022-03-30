import { Button } from "@mui/material";
import { useContext } from "react";
import { ShoppingContext } from "./App";
import '../styles/CartSummary.scss'
const CartSummary = () => {
    const { shoppingCart } = useContext(ShoppingContext);
    const newShoppingCart = [...shoppingCart]
    const totalCost = newShoppingCart.reduce((a, c) => a + c.productPrice * c.count, 0);
    return (<div className="cartSummary">
        {totalCost > 0 && <h2>total: {totalCost}$</h2>}
        {totalCost >0 && <Button
      className="buttonCartSummary"
      variant="contained"
>
      PROCEED
    </Button>}
    </div> );
}
 
export default CartSummary;