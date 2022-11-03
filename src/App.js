import "./App.css";
import Textform from "./Components/Textform";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div>
      <Navbar title="TextUtils" />
      <Textform heading="Enter below to analyze" />
    </div>
  );
}

export default App;
