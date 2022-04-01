import { createContext, useContext, useReducer } from "react";

export const ShopContext = createContext([])

export const StateProvider = ({ reducer, initialState, children }) => (
    <ShopContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ShopContext.Provider>
  );
  export const useStateValue = () => useContext(ShopContext);