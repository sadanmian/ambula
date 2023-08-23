import React, { useEffect, useState } from "react";
import "./todolist.css";

export const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name) => {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(taskName);
    setTaskName("");
    console.log("submit");
    console.log(tasks);
  };

  return (
    <div className="td">
      <div className="td-container">
        <form className="taskForm" onSubmit={handleSubmit}>
          <button>+</button>
          <input
            value={taskName}
            onChange={(event) => setTaskName(event.target.value)}
            type="text"
            placeholder="Your task..."
          />
        </form>

        {tasks.map((task) => (
          <div className="task">
            {!checked && (
              <div className="checked unchecked">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" />
                </svg>
              </div>
            )}
            {checked && (
              <div className="checked unchecked">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
              </div>
            )}
            {task.name}
          </div>
        ))}
      </div>
    </div>
  );
};
