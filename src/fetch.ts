interface TodoType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const fetchTodo = async (): Promise<TodoType> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
};
const getTodo = async (): Promise<void> => {
  const result = await fetchTodo();
  console.log("result", result);
};
getTodo();
