import { FC } from "react";
import { Product } from "../../interfaces";

interface CartItemProps {
  product: Product;
  quantity: number;
  addToCart: () => void;
}

export const CartItem: FC<CartItemProps> = ({
  product,
  quantity,
  addToCart,
}) => {
  const { thumbnail, title, price } = product;
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
};
