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
    const [cart, setCart] = useState<Array<any>>([]);
      
    const addToCart = (product: Product) => {
      //Check if the product is already in the cart
      const productInCartIndex = cart.findIndex((item) => item.id === product.id);
  
      if (productInCartIndex >= 0) {
        //structuredClone
        const newArr = structuredClone(cart);
        newArr[productInCartIndex].quantity += 1;
        return setCart(newArr);
      }
  
      //agregar producto si no esta en el carrito
      setCart((prevState) => [
        ...prevState,
        {
          ...product,
          quantity: 1,
        },
      ]);
    };
  
    const checkProductInCart = (product: Product) => {
      return cart.some((item) => item.id === product.id);
    };
  
    const removeFromCart = (product: Product) => {
      setCart((prevState) => prevState.filter((item) => item.id !== product.id));
    };
  
    const clearCart = () => {
      setCart([]);
    };
  
    return (
      <CartContext.Provider
        value={{ cart, addToCart, checkProductInCart, removeFromCart, clearCart }}
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
  