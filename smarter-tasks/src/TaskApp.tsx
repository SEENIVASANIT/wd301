// import React, { useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
interface TaskAppState {
  tasks: TaskItem[];
}


const TaskApp = () => {

  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );

  const addTask = (task: TaskItem) => {
    const nextId =
      taskAppState.tasks.length > 0
        ? taskAppState.tasks[taskAppState.tasks.length - 1].id! + 1
        : 1;

    const newTask: TaskItem = {
      id: nextId,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
    };
    setTaskAppState({ tasks: [...taskAppState.tasks, newTask] });
  };

  
  const removeTask = (taskToRemove: TaskItem) => {
    const updatedTasks = taskAppState.tasks.filter(
      (task) => task.id !== taskToRemove.id
    );
    setTaskAppState({ tasks: updatedTasks });
  };

  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-400">Smarter Tasks</h1>
      <h1 className="text-lg mb-6 text-slate-400">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
            Pending
          </h1>
          <TaskForm addTask={addTask} />
  
          <ol>
            <li>
              <TaskList tasks={taskAppState.tasks} removeTask={removeTask} />
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TaskApp;