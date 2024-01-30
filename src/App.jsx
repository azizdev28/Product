import { useState } from "react";
import "./App.css";
import Home from "./Page/Home";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
