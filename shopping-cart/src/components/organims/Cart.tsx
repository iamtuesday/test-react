import { useId, useReducer } from "react";
import { CartIcon, ClearCartIcon } from "../atoms";
import { useCart } from "../../context/cart.context";
import { CartItem } from "../molecules";

export const Cart = () => {
  const cartCheckboxId = useId();
  const { cart, addToCart, clearCart } = useCart();

  const initialState = {
    count: 0,
  };

  const reducer = (
    state: typeof initialState,
    action: "increment" | "decrement" | "reset"
  ) => {
    if (action === "increment") {
      return {
        count: state.count + 1,
      };
    }

    if (action === "decrement") {
      return {
        count: state.count - 1,
      };
    }

    if(action === "reset") {
        return initialState
    }

    throw new Error("Invalid action: " + action);
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          {cart.map((item, index) => {
            return (
              <CartItem
                key={index}
                product={item}
                addToCart={() => addToCart(item)}
                quantity={item.quantity}
              />
            );
          })}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};
