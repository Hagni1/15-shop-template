import Navigation from "./Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";
import Pages from "./Pages";
import Footer from "./Footer";
import { createContext, useEffect, useState } from "react";

export const ShoppingContext =createContext()

const LOCAL_STORAGE_KEY = 'shopCart'



function App() {
  const [shoppingCart, setShoppingCart] = useState([])
  useEffect(() => {
    const storedCartProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedCartProducts) setShoppingCart(storedCartProducts)
}, [])

  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(shoppingCart))
  },[shoppingCart])

  return (
    <Router>
      <div className="App">
        <ShoppingContext.Provider value={{ shoppingCart, setShoppingCart }}>
        <Navigation />
        <Pages />
      </ShoppingContext.Provider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
