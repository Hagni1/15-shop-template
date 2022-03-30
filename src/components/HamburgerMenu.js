import { useState } from "react";
import Hamburger from "react-hamburgers";
import "../styles/HamburgerMenu.scss";
import navigationData from "../data/navigationData.json";
import NavigationItem from "./NavigationItem";

const HamburgerMenu = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <Hamburger
        active={isActive}
        type="slider"
        onClick={() => setIsActive(!isActive)}
      ></Hamburger>

      
        <nav className={isActive? 'sideMenu activeMenu':'sideMenu'}>
          <ul>
            {navigationData.map((data) => (
              <NavigationItem
                key={data.navName}
                navLink={data.navLink}
                navName={data.navName}
              />
            ))}
          </ul>
        </nav>
     
    </div>
  );
};

export default HamburgerMenu;
