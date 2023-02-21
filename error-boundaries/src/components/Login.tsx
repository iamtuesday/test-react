import useFetchAndLoad from "../hooks/useFetchAndLoad";
import { login } from "../services/public.service";

export const Login = () => {
  const { loading, callEndpoint } = useFetchAndLoad();

  
  if(loading){
    return   <h1>Cargando...</h1>
  }
  
  const handleClick = async () => {
    const morty = await callEndpoint(login());
    console.log(morty);
  };
  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};
