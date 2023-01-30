import { FormEvent, useRef, useState } from "react";

interface ITask {
  name: string;
  done: boolean;
}

interface AppState {
  newTask: string;
  tasks: Array<ITask>;
  taskInput: HTMLInputElement
}

export const Task = () => {
  const [newTask, setNewTask] = useState<AppState["newTask"]>("");
  const [tasks, setTasks] = useState<AppState["tasks"]>([]);
  const taskInput = useRef<AppState["taskInput"]>(null)

  const addTask = (name: string) => {
    const newTask: AppState["tasks"] = [...tasks, { name, done: false }];
    setTasks(newTask);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
    taskInput.current?.focus();
  };

  const toggleDoneTask = (i: number): void => {
    const newTasks: AppState["tasks"] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  };

  const removeTask = (i: number): void => {
    const newTasks: AppState["tasks"] = [...tasks];
    newTasks.splice(i, 1)
    setTasks(newTasks);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          required
          ref={taskInput}
          autoFocus
          className="p-2"
        />
        <input
          type="submit"
          value="Add Task"
          className="bg-white px-4 text-black font-mono hover:bg-red-500 hover:text-white rounded-sm cursor-pointer"
        />
      </form>
      <div className="mt-4 flex flex-col gap-2">
        {tasks.map(({ name, done }, index) => {
          return (
            <div
              key={index}
              className="border rounded-sm border-gray-100 flex flex-col gap-2 px-4 py-2"
            >
              <h2 style={{ textDecoration: done ? "line-through" : "" }}>
                {name}
              </h2>
              <div className="flex justify-center gap-4">
                <button onClick={() => toggleDoneTask(index)}>
                  {done ? "✓" : "✗"}{" "}
                </button>
                <button onClick = {() => removeTask(index)}>🗑</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
