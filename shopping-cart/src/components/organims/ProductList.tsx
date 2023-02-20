import { FC } from "react";
import { Product } from "../../interfaces/products";
import { AddToCartIcon, RemoveFromCartIcon } from "../atoms";
import { useCart } from "../../context/cart.context";

interface ProductListProps {
  products: Product[];
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  const { addToCart, removeFromCart, checkProductInCart } = useCart();

  if (!products.length) {
    return <h1>No hay Productos!</h1>;
  }
  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isProductInCart: any = checkProductInCart(product);

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
                <div>
                  <button
                  style={{backgroundColor: isProductInCart ? "red" : "blue" }}
                    onClick={() => {
                      isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product);
                    }}
                  >
                    {isProductInCart ? (
                      <RemoveFromCartIcon />
                    ) : (
                      <AddToCartIcon />
                    )}
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
