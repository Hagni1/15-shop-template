import AddToCartAlert from "../components/AddToCartAlert";
import RenderProduct from "../components/RenderProduct";
import data from "../data/shirtData.json";

const Shirts = () => {
  return (
    <section className="productWrapper">
      {data.map((data) => (
        <RenderProduct
        key={data.id}
          id={data.id}
          productImg={data.productImg}
          productName={data.productName}
          productPrice={data.productPrice}
        />
      ))}
            <AddToCartAlert/>
    </section>
  );
};

export default Shirts;
