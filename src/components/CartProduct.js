import HandleRemoveFromCart from "./HandleRemoveFromCart";

const CartProduct = ({ productImg, productPrice, productName, count, id }) => {
   
  return (
    <article className="CartProduct">
      <img
        src={require(`../images/products/${productImg}`)}
        alt={productName}
      />
      <h2>{productName}</h2>
      <h3> {`${productPrice}$ * ${count} = ${productPrice * count}$`}</h3>
    <HandleRemoveFromCart key={id} id={id} count={count}/>
    </article>
  );
};

export default CartProduct;
