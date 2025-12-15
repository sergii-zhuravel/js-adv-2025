import { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
  }

  render() {
    return (
      <>
        <main className="container">
          <Form addTodo={this.addTodo} />
          <List />
        </main>
      </>
    );
  }

  addTodo(description) {
    this.setState((prevState) => ({
      todos: [...prevState.todos, { id: 3, description }],
    }));
  }
}

export default App;
