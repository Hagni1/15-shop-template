import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Hoodies from "../Pages/Hoodies";
import Jackets from "../Pages/Jackets";
import Pants from "../Pages/Pants";
import Shirts from "../Pages/Shirt";
import Skirts from "../Pages/Skirts";
import Tshirt from "../Pages/Tshirt";

const Pages = () => {
    return ( 
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/tshirt" element={<Tshirt/>}/>
                <Route path="/shirts" element={<Shirts/>}/>
                <Route path="/pants" element={<Pants/>}/>
                <Route path="/hoodies" element={<Hoodies/>}/>
                <Route path="/skirts" element={<Skirts/>}/>
                <Route path="/jackets" element={<Jackets/>}/>

            </Routes>
        </>
     );
}
 
export default Pages;