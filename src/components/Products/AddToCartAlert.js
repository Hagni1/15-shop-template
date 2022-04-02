import { Alert } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ShoppingContext } from "../../context/ShoppingContext";
import "../../styles/Products/AddToCartAlert.scss";

const AddToCartAlert = () => {
  const [showElement, setShowElement] = useState(false);
  const { shoppingCart } = useContext(ShoppingContext);
  const didMount = useRef(false);

  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 3000);
  }, [shoppingCart]);

  useEffect(() => {
    const json = JSON.parse(localStorage.getItem("shopCart"));
    if (
      (didMount.current &&
        json.length === shoppingCart.length &&
        json.length > 0) ||
      json.length + 1 === shoppingCart.length
    ) {
      setShowElement(true);
    } else {
      didMount.current = true;
    }
  }, [shoppingCart]);

  return (
    <div>
      <div>
        {showElement ? (
          <Alert className="alert" variant="filled" severity="success">
            <p>Succesfuly added product to cart</p>
          </Alert>
        ) : null}
      </div>
    </div>
  );
};
export default AddToCartAlert;
