import "./App.css";

const MyCoolComponent = () => <div>I'm cool component!</div>;

function Header(props) {
  const { name } = props;

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
      <Header name="Nick" age={34} />
      <Test />
      <MyCoolComponent />
    </>
  );
}

export default App;
