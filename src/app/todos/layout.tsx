import React from "react";
import TodosList from "./todolist";

type Props = {
  children: React.ReactNode;
};

function TodosLayout({ children }: Props) {
  return (
    <div className="flex">
      {/* @ts-ignore */}
      <TodosList />
      <div className="w-full">{children}</div>
    </div>
  );
}

export default TodosLayout;