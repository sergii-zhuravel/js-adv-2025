import { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, description: "Todo 1" },
        { id: 2, description: "Todo 2" },
      ],
    };

    this.addTodo = this.addTodo.bind(this);
  }

  render() {
    return (
      <>
        <main className="container">
          <Form addTodo={this.addTodo} />
          <List todos={this.state.todos} />
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
