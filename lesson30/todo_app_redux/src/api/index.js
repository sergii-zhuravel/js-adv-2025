export async function fetchTodosAPI() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await res.json();
}
