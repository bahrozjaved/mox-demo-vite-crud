import React from "react";
import { useObserver } from "mobx-react";
import { useTodoStore } from "../../hooks/useTodoStore";

const DeletedList = () => {
  const todoStore = useTodoStore();

  return useObserver(() => {
    return (
      <div className="list">
        <h4 className="text-black font-medium text-lg">DeletedList</h4>
        <ul className="h-full flex items-start justify-center gap-6 mt-4 flex-col">
          {todoStore.deletedList.map((el) => {
            const { id, title, task } = el;
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
                </li>
              ); 
          })}
        </ul>
      </div>
    );
  });
};

export default DeletedList;
