import { useSelector } from "react-redux";
import "./App.css";
import Increment from "./components/increment/Increment";
import Decrement from "./components/decrement/Decrement";
import Reset from "./components/reset/Reset";

function App() {
  let count = useSelector((state) => state.counter.value);
  // console.log(count);
  if (count < 0) {
    count = 0;
  } else {
    count = count;
  }
  return (
    <div className="counter">
      <h2>Counter App</h2>
      <div className="app">
        <Increment />
        <div className="result">{count}</div>
        <Decrement />
      </div>
      <Reset />
    </div>
  );
}

export default App;
