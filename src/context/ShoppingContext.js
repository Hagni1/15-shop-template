import {
  createContext,
  useEffect,
  useState,
} from "react";


 export const ShoppingContext = createContext();
 const LOCAL_STORAGE_KEY = "shopCart";

 const AppProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    const storedCartProducts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (storedCartProducts) setShoppingCart(storedCartProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  return (
    <ShoppingContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </ShoppingContext.Provider>
  );
};
export default AppProvider;