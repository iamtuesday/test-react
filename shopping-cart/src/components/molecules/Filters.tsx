import {
  FC,
  useState,
  useEffect,
  BaseSyntheticEvent,
  Dispatch,
  SetStateAction,
  useId,
} from "react";
import { Product } from "../../interfaces";
import { useFilters } from "../../hooks/useFilters";

interface FiltersPros {
  products: Product[];
}

export const Filters: FC<FiltersPros> = ({ products }) => {
  const [categories, setCategories] = useState<Array<string>>();
  const minPriceFilerId = useId();
  const categoryFilterId = useId();
  const {filters,  setFilters } = useFilters();

  console.log(minPriceFilerId, categoryFilterId);

  const handleChangeMinPrice = (e: BaseSyntheticEvent) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e: BaseSyntheticEvent) => {
    //HUELE MAL
    setFilters((prevState) => ({
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
        <label htmlFor={minPriceFilerId}>Price</label>
        <input
          type="range"
          id={minPriceFilerId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All Products</option>;
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
