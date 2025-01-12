import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3 className="text-primary text-center text-3xl font-thin">
        Welcome to Wasan Rooms
      </h3>
    </>
  );
}

export default App;
