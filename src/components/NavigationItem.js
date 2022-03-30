import { NavLink } from "react-router-dom";
const NavigationItem = ({navLink,navName}) => {
  return (
    <li>
      <NavLink to={`/${navLink}`}> {navName}</NavLink>
    </li>
  );
};

export default NavigationItem;
