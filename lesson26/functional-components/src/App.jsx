import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect");

    return () => {
      console.log("Component will unmount");
    };
  }, []);

  const handeClick = () => setCounter(counter + 1);
  return <button onClick={handeClick}>Count: {counter}</button>;
}

function App() {
  const [counter, setCounter] = useState(0);

  const [isHidden, setIsHidden] = useState(true);

  // const handeClick = () => setCounter(counter + 1);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>Count: {counter}</button>
      {!isHidden && <Counter />}
      <button
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        {isHidden ? "Show" : "Hide"}
      </button>
    </>
  );
}

export default App;
