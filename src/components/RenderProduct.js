import { Button } from "@mui/material";
import { useContext } from "react";
import "../styles/RenderProduct.scss";
import { ShoppingContext } from "./App";

const RenderProduct = ({ productImg, productName, productPrice, id }) => {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingContext);

  const handleAddToCart = (productName, productPrice, productImg, id) => {
   let newShoppingCart = [...shoppingCart];
    if (newShoppingCart.findIndex((item) => item.id === id) === -1) {
      const product = {
        id,
        productImg,
        productName,
        productPrice,
        count: 1,
      };
      newShoppingCart.push(product);
      setShoppingCart(newShoppingCart);
    } else {
      const index = newShoppingCart.findIndex((item) => item.id === id);
      newShoppingCart[index].count = newShoppingCart[index].count + 1;
      setShoppingCart(newShoppingCart);
    }
  };

  return (
    <article className="productArticle">
      <img
        src={require(`../images/products/${productImg}`)}
        alt={productName}
      />
      <div className="productDescript">
        <p>{productName}</p>
        <p>{`${productPrice}$`}</p>
        <Button
          className="productButton"
          variant="contained"
          onClick={() =>
            handleAddToCart(productName, productPrice, productImg, id)
          }
        >
          Add to Cart
        </Button>
      </div>
    </article>
  );
};

export default RenderProduct;
