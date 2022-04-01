import { useEffect } from "react";
import AddToCartAlert from "../components/AddToCartAlert";
import RenderProduct from "../components/RenderProduct";

const Main = ({data,section}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
}
 
export default Main;