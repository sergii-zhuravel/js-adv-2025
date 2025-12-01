import { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul className="listwrapper">
        {todos.map((todo) => {
          return (
            <ListItem
              key={todo.id}
              id={todo.id}
              description={todo.description}
            />
          );
        })}
      </ul>
    );
  }
}

export default List;
