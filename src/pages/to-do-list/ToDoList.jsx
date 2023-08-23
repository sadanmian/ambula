import "./todolist.css";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  function removeTask(indexToRemove) {
    setTasks((prev) => {
      return prev.filter((taskObject, index) => index !== indexToRemove);
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  const numberComplete = tasks.filter((t) => t.done).length;
  const numberTotal = tasks.length;

  function renameTask(index, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }

  return (
    <div className="td">
      <div className="td-nav">
        <Link to={"/"}>
          <button className="td-home">Home</button>
        </Link>
        <span>To-Do-List App</span>
      </div>
      <main>
        <h1>
          {numberComplete}/{numberTotal} Complete
        </h1>
        <TaskForm onAdd={addTask} />
        {tasks.map((task, index) => (
          <Task
            {...task}
            onRename={(newName) => renameTask(index, newName)}
            onTrash={() => removeTask(index)}
            onToggle={(done) => updateTaskDone(index, done)}
          />
        ))}
      </main>
    </div>
  );
}

export default ToDoList;
