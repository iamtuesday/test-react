import {
  FC,
  PropsWithChildren,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  useReducer,
} from "react";
import { Product } from "../interfaces";
import {
  useCartReducers,
} from "../components/reducers/cartReducer";

interface ControllerState {
  cart: Array<any>;
  addToCart: (product: Product) => void;
  checkProductInCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}

const ControllerInitialState = {
  cart: [],
  addToCart: () => {},
  checkProductInCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
};

export const CartContext = createContext<ControllerState>(
  ControllerInitialState
);

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const { state, addToCart, checkProductInCart, removeFromCart, clearCart } =
    useCartReducers();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        checkProductInCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  let cartContext = useContext(CartContext);

  if (cartContext === undefined) {
    throw new Error("useCart must be use within a CartProvider");
  }

  return cartContext;
};
