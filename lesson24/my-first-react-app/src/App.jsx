import "./App.css";

const MyCoolComponent = () => <div>I'm cool component!</div>;

function Header() {
  const name = "Nick";

  return (
    <div tabIndex="1">
      <span>Hello {name.toUpperCase()}!!!</span>
    </div>
  );
}

function Test() {
  return (
    <div>
      <button disabled>Test</button>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Test />
      <MyCoolComponent />
    </>
  );
}

export default App;
