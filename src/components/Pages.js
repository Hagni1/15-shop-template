import { Route, Routes, useLocation } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Hoodies from "../Pages/Hoodies";
import Jackets from "../Pages/Jackets";
import Pants from "../Pages/Pants";
import Shirts from "../Pages/Shirt";
import Skirts from "../Pages/Skirts";
import Tshirt from "../Pages/Tshirt";
import '../styles/Pages.scss'
import { CSSTransition, TransitionGroup } from "react-transition-group";
const Pages = () => {
  const location = useLocation();
  return (
  
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/tshirt" element={<Tshirt />} />
            <Route path="/shirts" element={<Shirts />} />
            <Route path="/pants" element={<Pants />} />
            <Route path="/hoodies" element={<Hoodies />} />
            <Route path="/skirts" element={<Skirts />} />
            <Route path="/jackets" element={<Jackets />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
  
  );
};

export default Pages;
