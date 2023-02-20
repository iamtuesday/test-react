import { useReducer } from "react";
import { Product } from "../../interfaces";

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

enum cartActionKind {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
}

interface cartAction {
  type: cartActionKind;
  payload?: Product;
}

//update localStorage with state for cart
export const uptadedLocalStorage = (state: Array<any>) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

let item = localStorage.getItem("cart");
export const cartInitialState: Array<any> = item ? JSON.parse(item) : [];

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (
    state: typeof cartInitialState,
    action: cartAction
  ) => {
    const { type, payload } = action;

    const productInCartIndex = state.findIndex(
      (item) => item.id === payload?.id
    );

    //Check if the product is already in the cart
    if (productInCartIndex >= 0) {
      //structuredClone
      // const newState = structuredClone(state);
      // newState[productInCartIndex].quantity += 1;
      // uptadedLocalStorage(newState);
      // return newState;

      //usando map
      const newState = state.map((item) => {
        if (item.id === payload?.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      uptadedLocalStorage(newState);
      return newState;

      //usando el spread operator y slice
      // const newState = [
      //   ...state.slice(0, productInCartIndex),
      //   { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1},
      //   ...state.slice(productInCartIndex + 1)
      // ]
    }

    const newState = [
      ...state,
      {
        ...payload, //product
        quantity: 1,
      },
    ];

    uptadedLocalStorage(newState);
    return newState;
  },

  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (
    state: typeof cartInitialState,
    action: cartAction
  ) => {
    const { type, payload } = action;
    {
      const newState = state.filter((item) => item.id !== payload?.id);
      uptadedLocalStorage(newState);
      return newState;
    }
  },

  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    uptadedLocalStorage([]);
    return [];
  },
};

// export const cartReducer = (
//   state: typeof cartInitialState,
//   action: cartAction
// ) => {
//   const { type, payload } = action;
//   switch (type) {
//     case CART_ACTION_TYPES.ADD_TO_CART: {
//       const productInCartIndex = state.findIndex(
//         (item) => item.id === payload?.id
//       );

//       //Check if the product is already in the cart
//       if (productInCartIndex >= 0) {
//         //structuredClone
//         const newState = structuredClone(state);
//         newState[productInCartIndex].quantity += 1;
//         uptadedLocalStorage(newState);
//         return newState;
//       }

//       const newState = [
//         ...state,
//         {
//           ...payload, //product
//           quantity: 1,
//         },
//       ];

//       uptadedLocalStorage(newState);
//       return newState;
//     }

//     case CART_ACTION_TYPES.REMOVE_FROM_CART: {
//       const newState = state.filter((item) => item.id !== payload?.id);
//       uptadedLocalStorage(newState);
//       return newState;
//     }

//     case CART_ACTION_TYPES.CLEAR_CART: {
//       uptadedLocalStorage(cartInitialState);
//       return cartInitialState;
//     }
//   }
//   return state;
// };

export const cartReducer = (
  state: typeof cartInitialState,
  action: cartAction
) => {
  const { type } = action;
  const updateState = UPDATE_STATE_BY_ACTION[type];
  return updateState ? updateState(state, action) : state;
};

export const useCartReducers = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product: Product) =>
    dispatch({
      type: cartActionKind.ADD_TO_CART,
      payload: product,
    });

  const removeFromCart = (product: Product) =>
    dispatch({
      type: cartActionKind.REMOVE_FROM_CART,
      payload: product,
    });

  const clearCart = () => dispatch({ type: cartActionKind.CLEAR_CART });

  const checkProductInCart = (product: Product) => {
    return state.some((item) => item.id === product.id);
  };

  return { state, addToCart, removeFromCart, clearCart, checkProductInCart };
};
