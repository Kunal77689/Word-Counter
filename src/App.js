import "./App.css";
import Textform from "./Components/Textform";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
function App() {
  return (
    <div>
      <Navbar title="TextUtils" />
      {/*<Textform heading="Enter below to analyze" />
       */}
      <About />
    </div>
  );
}

export default App;
