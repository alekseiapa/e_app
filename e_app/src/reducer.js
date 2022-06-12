export const initialState = {
  cart: [],
};

export const getCartTotal = (cart) => {
  return cart?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
  }
};
export default reducer;
