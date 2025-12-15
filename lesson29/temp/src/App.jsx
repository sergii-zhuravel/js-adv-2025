import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decremented, incremented } from "./store/reducer";

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);

  const handleDecrement = () => {
    dispatch(decremented());
  };

  const handleIncrement = () => {
    dispatch(incremented());
  };

  return (
    <>
      <span>{value}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}

export default App;
