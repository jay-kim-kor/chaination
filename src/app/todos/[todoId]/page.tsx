import React from "react";

type Props = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const todo: TodoType = await result.json();
  return todo;
};

async function TodoId({ params: { todoId } }: Props) {
  const todo = await fetchTodo(todoId);
  return (
    <div className="bg-slate-300 space-y-2 p-2 border-4 border-blue-400">
      <div>Todo Id : {todoId}</div>
      <div>Todo Title : {todo.title}</div>
      <div className="border-t border-black py-2">
        Completed :{todo.completed ? <span> Yes</span> : <span> No</span>}
      </div>
    </div>
  );
}

export default TodoId;