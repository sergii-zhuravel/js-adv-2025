import "./App.css";

import { useMyCustomHook } from "./hooks/counter";

function App() {
  const { handleClick } = useMyCustomHook();

  return (
    <>
      <div>
        <input type="text" />
        <button onClick={handleClick}>Click</button>
      </div>
    </>
  );
}

export default App;
