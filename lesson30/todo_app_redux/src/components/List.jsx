import { useEffect } from "react";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodosThunk } from "../store/thunks";

function List() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, []);

  return (
    <ul className="listwrapper">
      {todos.map((todo) => {
        return <ListItem key={todo.id} id={todo.id} description={todo.title} />;
      })}
    </ul>
  );
}

export default List;
