import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Task } from "./components/organisms";

function App() {
  return (
    <div className="App">
      {/* Task */}
      <Task />
    </div>
  );
}

export default App;
