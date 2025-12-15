import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decremented, incremented } from "./store/rootReducer";

function App() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    console.log(incremented());
    dispatch(incremented(10));
  };

  const handleDecrement = () => {
    dispatch(decremented());
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
