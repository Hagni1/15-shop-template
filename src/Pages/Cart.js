import { useContext } from "react";
import { ShoppingContext } from "../components/App";
import CartProduct from "../components/CartProduct";
import CartSummary from "../components/CartSummary";
import '../styles/Cart.scss'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const Cart = () => {
  const { shoppingCart } = useContext(ShoppingContext);
  return (
    <main className="cart">
      {shoppingCart.length === 0 && <h1>Your cart is empty</h1>}
      <TransitionGroup>
      {shoppingCart.map((product) => (
         <CSSTransition   key={product.id} timeout={200} classNames="my-node">
           <CartProduct
             productImg={product.productImg}
             productPrice={product.productPrice}
             productName={product.productName}
             count={product.count}
             id={product.id}
           />
       </CSSTransition>
      ))}
      </TransitionGroup>
      <CartSummary/>
    </main>
  );
};

export default Cart;
