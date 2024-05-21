import React from "react";

import { Observer } from "mobx-react";
import { useTodoStore } from "../../hooks/useTodoStore";

const IncompleteTodo = () => {
  const todoStore = useTodoStore();

  return (
    <Observer>
      {() => {
        return (
          <div className="incomplete">
            <h4 className="text-black font-medium text-lg">Remaining Tasks</h4>
            <ul className="h-full flex items-start justify-center gap-6 mt-4 flex-col">
              {todoStore.todoList
                ?.filter((node) => !node.done)
                .map((el) => {
                  const { id, title, task, done } = el;

                  return (
                    <li
                      key={id}
                      className="w-fit px-10 py-2 bg-blue-500 text-white rounded-lg"
                    >
                      <div className="flex gap-4 ">
                        <h3 className="font-bold text-lg">Title</h3>
                        <p>{title}</p>
                      </div>
                      <div className="flex gap-4 ">
                        <h3 className="font-bold text-lg">Task</h3>
                        <p>{task}</p>
                      </div>
                      <button
                        className="py-2 px-10 bg-black outline-none  font-bold hover:outline-[1px] hover:outline-white  rounded-lg "
                        onClick={() => todoStore.complete(id)}
                      >
                        Done
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
        );
      }}
    </Observer>
  );
};

export default IncompleteTodo;
