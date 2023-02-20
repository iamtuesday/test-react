import {
  FC,
  useState,
  useEffect,
  BaseSyntheticEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { Product } from "../../interfaces";

interface FilterState {
  category: string;
  minPrice: number;
}

interface FiltersPros {
  products: Product[];
  onChangeFilters: Dispatch<SetStateAction<FilterState>>;
}

export const Filters: FC<FiltersPros> = ({ products, onChangeFilters }) => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [categories, setCategories] = useState<Array<string>>();

  const handleChangeMinPrice = (e: BaseSyntheticEvent) => {
    //DOS FUENTES DE LA VERDAD
    setMinPrice(e.target.value);
    onChangeFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e: BaseSyntheticEvent) => {
    //HUELE MAL
    onChangeFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  useEffect(() => {
    let newArray = products.map(({ category }, index) => {
      return category;
    });

    //FILTERED BY UNIQUE
    const filteredArray: Array<string> = [];
    for (let i = 0; i < newArray.length; i++) {
      let element = newArray[i];
      if (!filteredArray.includes(newArray[i])) {
        filteredArray.push(element);
      }
      setCategories(filteredArray);
    }

    //FILTERED BY UNIQUE (SET)
    // let uniqueWords = [...new Set(newArray)];
    // console.log(uniqueWords)

    //FILTERED BY INDEXOF() & FILTER
    // newArray.forEach((element, index) => {
    //   console.log(`${element} - ${index} - ${newArray.indexOf(element)}`);
    // });

    // let uniqueWords = newArray.filter((element, index) => {
    //   return newArray.indexOf(element) === index;
    // });
  }, []);

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="range"
          id="price"
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select id="category" onChange={handleChangeCategory}>
          {categories?.map((item, index) => {
            return (
              <option
                key={index}
                value={item}
                style={{ textTransform: "capitalize" }}
              >
                {item.replace(/\-/g, " ")}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
};
