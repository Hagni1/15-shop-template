import { Button } from "@mui/material";
import { lazy, useContext } from "react";
import "../../styles/Products/RenderProduct.scss";
import { ShoppingContext } from "../../App";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a5b3b0',
    },
  },
});

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
        src={require(`../../images/products/${productImg}`)}
        alt={productName}
        loading={lazy}
      />
      <div className="productDescript">
        <p>{productName}</p>
        <p>{`${productPrice}$`}</p>
        <ThemeProvider theme={theme}>
        <Button
          size='small'
          className="productButton"
          variant="outlined"
          onClick={() =>
            handleAddToCart(productName, productPrice, productImg, id)
          }
          color="primary"
        >
          <span>Add to Cart</span>
        </Button>
        </ThemeProvider>
      </div>
    </article>
  );
};

export default RenderProduct;
