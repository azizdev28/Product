import { useState } from "react";
import "./App.css";
import Home from "./Page/Home";

function App() {
  const [dark, setDark] = useState(false);
  const handleClick = () => {
    setDark(!dark);
  };
  return (
    <>
      <div className={dark ? "true " : "false"}>
        <Home handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
