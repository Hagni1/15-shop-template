import { Alert } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ShoppingContext } from "../App";
import "../styles/AddToCartAlert.scss";

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
    if (
      didMount.current
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
