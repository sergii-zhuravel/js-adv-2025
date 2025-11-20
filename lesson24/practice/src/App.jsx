import "./App.css";

function App() {
  return (
    <>
      <main className="container">
        <form className="d-flex">
          <input type="text" />
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
        <ul className="listwrapper">
          <li className="d-flex justify-content-between mb-2 mt-2 listItem">
            <span>Text</span>
            <div>
              <button className="btn btn-success mr-2">Done</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </li>
          <li className="d-flex justify-content-between mb-2 mt-2 listItem">
            <span>Text</span>
            <div>
              <button className="btn btn-success mr-2">Done</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </li>
          <li className="d-flex justify-content-between mb-2 mt-2 listItem">
            <span>Text</span>
            <div>
              <button className="btn btn-success mr-2">Done</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </li>
          <li className="d-flex justify-content-between mb-2 mt-2 listItem">
            <span>Text</span>
            <div>
              <button className="btn btn-success mr-2">Done</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
}

export default App;
