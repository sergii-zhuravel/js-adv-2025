import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decremented,
  fetchPhotosThunk,
  incremented,
} from "./store/rootReducer";
import { store } from "./store/store";
import { Audio } from "react-loader-spinner";

function App() {
  const value = useSelector((state) => state.value);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incremented(10));
  };

  const handleDecrement = () => {
    dispatch(decremented());
  };

  const handleGetPhotos = () => {
    dispatch(fetchPhotosThunk());
  };

  return (
    <>
      <span>{value}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleGetPhotos}>Get Photos</button>
      {isLoading && (
        <Audio
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
        />
      )}
    </>
  );
}

export default App;
