import { createContext, useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Context = createContext(0);

console.log(Context);

function Component1() {
  return <Component2 />;
}

function Component2() {
  return <Component3 />;
}

function Component3() {
  const [count, setCount] = useContext(Context);
  return (
    <div>
      {count}
      <button onClick={() => setCount((count) => count + 1)}>Clic</button>
    </div>
  );
}

function Home() {
  return (
    <div>
      Home page <NavLink to="/counter">Counter</NavLink>{" "}
    </div>
  );
}

function App() {
  const countState = useState(0);

  return (
    <BrowserRouter>
      <Context.Provider value={countState}>
        <Routes>
          <Route path="/counter" element={<Component1 />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
