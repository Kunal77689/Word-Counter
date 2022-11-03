import "./App.css";
import { useState } from "react";
import Textform from "./Components/Textform";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
function App() {
  const [mode, setMode] = useState("light");
  const setColor = () => {
    if (mode === "light") {
      console.log("first");
      setMode("dark");
      document.body.style.backgroundColor = "#4c5863";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <div>
      <Navbar title="TextUtils" mode={mode} setColor={setColor} />
      <Textform
        heading="Enter The Text To Analyze"
        mode={mode}
        setColor={setColor}
      />
    </div>
  );
}

export default App;
