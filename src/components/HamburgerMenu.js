import { useState } from "react";
import Hamburger from "react-hamburgers";
import "../styles/HamburgerMenu.scss";
import NavigationItem from "./NavigationItem";

const HamburgerMenu = ({data}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={isActive ? 'hamburgerWrapper activeHamburger' : 'hamburgerWrapper'} > 
      <Hamburger
        active={isActive}
        type="slider"
        onClick={() => setIsActive(!isActive)}
      ></Hamburger>

      
        <nav className={isActive? 'sideMenu activeMenu':'sideMenu'}>
          <ul>
            {data.map((data) => (
              <NavigationItem
                click={()=>setIsActive(false)}
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
