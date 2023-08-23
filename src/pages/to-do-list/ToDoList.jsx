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

  function getMessage() {
    const percentage = (numberComplete / numberTotal) * 100;
    if (percentage === 0) {
      return "Try to do at least one!";
    }
    if (percentage === 100) {
      return "Nice job for today!";
    }
    return "Keep it going";
  }

  function renameTask(index, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }

  return (
    <div className="td">
      <Link to={"/"}>
        <button className="td-home">Home</button>
      </Link>
      <main>
        <h1>
          {numberComplete}/{numberTotal} Complete
        </h1>
        <h2>{getMessage()}</h2>
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
