export const initialState = {
  cart: [
    {
      id: "285620",
      title: "Product Title",
      price: "10,00",
      rating: 5,
      image: "/images/01_AppleiPadPro112021128Gt5G_grey.png"
    },
    {
      id: "285620",
      title: "Product Title",
      price: "10,00",
      rating: 5,
      image: "/images/01_AppleiPadPro112021128Gt5G_grey.png"
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case 'ADD_TO_CART':
      // adding product to cart
      return { 
        ...state,
        cart: [...state.cart, action.item]
      };
      break;
    case 'REMOVE_FROM_CART':
      // removing item from cart

      // cloned basket
      let newCart = [...state.cart];
      // check if product exists
      const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in cart`
        );
      }

      return {
        ...state,
        cart: newCart
      };
    default:
      return state;
  }
};

export default reducer;
