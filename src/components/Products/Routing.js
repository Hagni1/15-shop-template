import { Route, Routes, useLocation } from "react-router-dom";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import data from "../../data.json";
import "../../styles/Products/Routing.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Main from "./Main";

const Pages = () => {
  const newData = [...data[0].data];
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={1000} classNames="fade">
        <Routes>
          <Route path="*" element={<Home />} />
          {newData.map((item) => (
            <Route key={item.section} path={item.section} element={<Main data={item.data} />} />
          ))}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Pages;
