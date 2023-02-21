import { useState, useEffect } from "react";
import "./App.css";
import { ComponentTest, ComponentTestAync, Login } from "./components";

function App() {
  const [name, setName] = useState<string | null>(null);
  useEffect(() => {
    setTimeout(() => {
      setName("Selene");
    }, 2000);
  });



  return (
    <div className="App">
      {/* <ComponentTest name={name}/> */}
      {/* <ComponentTestAync /> */}
      <Login />
    </div>
  );
}

export default App;
