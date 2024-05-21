import { useState } from "react";
import "./App.css";
import "./form.scss";
import clsx from "clsx";
import { Observer } from "mobx-react";
import { useTodoStore } from "./hooks/useTodoStore";
import ListTodo from "./Components/ListTodo";
import CompletedTodo from "./Components/completedTodo";
import IncompleteTodo from "./Components/incompleteTodo";
import DoneTodo from "./Components/doneList";
import DeletedList from "./Components/deletedList";

function App() {
  const todoStore = useTodoStore();

  const contactFormClasses = clsx("bg-white ");
  const [state, setState] = useState({
    title: "",
    task: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, task } = state;
    todoStore.addTodo(title, task);
    setState({
      title: "",
      task: "",
    });
  };

  return (
    <Observer>
      {() => {
        return (
          <div className={contactFormClasses} data-testid="contact-form">
            <h1 className="text-black font-bold text-3xl">
              To do list using Mobx
            </h1>
            <div className="mt-8 w-full px-4 pb-10 md:px-[84px]">
              <form
                onSubmit={handleSubmit}
                name="Contact Us"
                method="post"
                action=""
                data-netlify="true"
                className={clsx("mt-5 w-full md:mt-8")}
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full justify-center items-end">
                  <div className="w-full lg:w-2/5">
                    <label
                      htmlFor="task"
                      className="font-Lato text-sm font-bold leading-5 text-primary_heading"
                    >
                      Task
                    </label>
                    <input
                      name="task"
                      id="task"
                      required
                      type="text"
                      value={state.task || ""}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          task: e.target.value,
                        }))
                      }
                      className="mt-2 h-12 w-full rounded-[2px] border-[1px] border-[#B2B2B2] bg-transparent pl-4 font-Lato text-primary_heading outline outline-[3px] outline-transparent focus:border-blue-500 focus:outline-blue-500/30 "
                    />
                  </div>
                  <div className="w-full lg:w-2/5">
                    <label
                      htmlFor="title"
                      className="font-Lato text-sm font-bold leading-5 text-primary_heading"
                    >
                      Title
                    </label>
                    <input
                      name="title"
                      id="title"
                      required
                      type="text"
                      value={state.title || ""}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                      className="mt-2 h-12 w-full rounded-[2px] border-[1px] border-[#B2B2B2] bg-transparent pl-4 font-Lato text-primary_heading outline outline-[3px] outline-transparent focus:border-blue-500 focus:outline-blue-500/30 "
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full lg:w-1/5 h-12  rounded-lg bg-blue-700/90 text-white font-bold"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ListTodo />
              <CompletedTodo />
              <IncompleteTodo />
              <DoneTodo />
              <DeletedList/>
            </div>
          </div>
        );
      }}
    </Observer>
  );
}

export default App;
