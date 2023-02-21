import  axios  from "axios";
import { loadAbort } from "../utilities";

export const login = () => {
  const controller = loadAbort();
  return {
    call: axios.get("https://rickandmortyapi.com/api/character/2", {
      signal: controller.signal,
    }),
    controller,
  };
};
