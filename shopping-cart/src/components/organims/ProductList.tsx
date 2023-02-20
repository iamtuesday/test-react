import { FC } from "react";
import { Product } from "../../interfaces/products";
import { AddToCartIcon } from "../atoms";

interface ProductListProps {
  products: Product[];
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  if(!products.length){
    return <h1>No hay Productos!</h1>
  }
  return (
    <main className="products">
      <ul>
        {products.map(({ id, title, thumbnail, price }) => {
          return <li key={id}>
            <img src={thumbnail} alt={title} />
            <div>
              <strong>{title}</strong> - ${price}
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </div>
          </li>;
        })}
      </ul>
    </main>
  );
};
