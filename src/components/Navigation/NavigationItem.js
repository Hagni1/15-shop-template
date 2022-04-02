import { NavLink } from "react-router-dom";
const NavigationItem = ({navLink,navName, click}) => {
  return (
    <li>
      <NavLink onClick={click} to={`/${navLink}`}> {navName}</NavLink>
    </li>
  );
};

export default NavigationItem;
