import React from "react";
import TodosList from "./todolist";

type Props = {
    params: {
        todoId: string;
      };

};

function Todos({}: Props) {
  return (
    <div className="border-4 border-yellow-500 text-2xl text-yellow-400 p-2">
      This is Todos Page
      <div className="flex">
        {/* @ts-ignore */}
        <TodosList />
      </div>
    </div>
  );
}

export default Todos;