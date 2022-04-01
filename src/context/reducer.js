export const initialState = {
    shoppingCart: [],
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
          let newShoppingCart = [...state.shoppingCart];
           
                if (newShoppingCart.findIndex((item) => item.id === action.product.id) === -1) {
                    return {
                        ...state,
                        shoppingCart: [...state.shoppingCart, action.product]
                    }
                } else {
                    const index = newShoppingCart.findIndex((item) => item.id === action.product.id);
                    newShoppingCart[index].count = newShoppingCart[index].count + 1;
                    return {
                        ...state,
                        shoppingCart: newShoppingCart
                    }
                }
      case "REMOVE_FROM_CART":
        let newCart = [...state.shoppingCart];
        const index = state.cart.findIndex(
          (cartItem) => cartItem.id === action.id
        );
        if (index >= 0) {
          newCart.splice(index, 1);
        } else {
          console.warn(`Cant remove product (id: ${action.id})`);
        }
        return { ...state, cart: newCart };
      default:
        return state;
    }
  };
  
  export default reducer;