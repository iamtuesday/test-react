import { SetStateAction } from "react";
import {
  Dispatch,
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

interface ControllerFilterState {
  minPrice: number;
  category: string;
}

const initialState: ControllerFilterState = {
  minPrice: 0,
  category: "all",
};

interface ControllerState {
  filters: ControllerFilterState;
  setFilters: Dispatch<SetStateAction<ControllerFilterState>>;
}

const ControllerInitialState = {
  filters: initialState,
  setFilters: () => {}
};
//Este es que tenemos que consumir
export const FiltersContext = createContext<ControllerState>(
  ControllerInitialState
);

//Este es que nos provee al acceso al context
export const FiltersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filters, setFilters] = useState(initialState);
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => useContext(FiltersContext);
