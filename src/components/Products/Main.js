import { useEffect } from "react";
import AddToCartAlert from "../../components/Products/AddToCartAlert";
import RenderProduct from "./RenderProduct";

const Main = ({data,section}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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