import { useId } from "react";
import { CartIcon, ClearCartIcon } from "../atoms";
import { useCart } from "../../context/cart.context";

export const Cart = () => {
  const cartCheckboxId = useId();
  const {cart} = useCart();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
              alt="Iphone"
            />
            <div>
              <strong>iPhone</strong> - $1449
            </div>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};
