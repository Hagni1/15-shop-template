import { Button } from "@mui/material";
import "../../styles/Cart/OrderConfirmation.scss";
const OrderConfirmation = ({ totalCost, setIsActive }) => {
  return (
    <div className="orderConfirmation">
      <Button
        className="buttonOrderConfirmation"
        variant="text"
        onClick={() => setIsActive(false)}
      >
        <p>X</p>
      </Button>
      <h2>Thank You for shopping in our shop! </h2>
      <h3>Order will be around 2-3 days.</h3>
      <h4>Total cost: {totalCost} $ </h4>
    </div>
  );
};

export default OrderConfirmation;
