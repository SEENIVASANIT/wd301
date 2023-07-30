import TaskCard from './TaskCard';
import './TaskCard.css'
import React from "react";
function App() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-center mb-4 text-3xl font-bold">Smarter Tasks</h1>
      <p className="mb-4">
        Project: Graduation Final Year Project (Revamp College Website)
      </p>
      <div className="flex" id='sd'>
        <div className="p-4 border border-solid border-indigo-800 w-1/2">
          <h2 className="mb-2 text-lg text-red-100">Pending</h2>
          <div className="task-card">
          
            <p className="text-sm mb-2 text-red-600">Due Date: 10th April</p>
            <p className="text-sm text-green-500">Assignee: Rohit S</p>
          </div>
          <div className="flex task-card">
            <h3 className="font-bold mb-2 text-yellow-600">Add a blog</h3>
            <p className="text-sm mb-2 text-red-600">Due Date: 22nd March</p>
            <p className="text-sm text-green-500">Assignee: Rohit M</p>
          </div>
          <button className="flex items-center mt-4">
            <span className="ml-2 text-blue-600">Spawn a new task</span>
          </button>
        </div>
        <div className="p-4 border border-solid border-indigo-600 w-1/2">
          <h2 className="mb-2 text-lg text-red-500">Done</h2>
          <div className="task-card">
            <h3 className="font-bold mb-2 text-yellow-600">
              Design the darn mockUp
            </h3>
            <p className="text-sm mb-2 text-red-600">
              Completed at: 10th April
            </p>
            <p className="text-sm text-green-500">Assignee: Rohit M</p>
          </div>
          <div className="task-card">
            <h3 className="font-bold mb-2 text-yellow-600">
              Get the approval from the principal
            </h3>
            <p className="text-sm mb-2 text-red-600">
              Completed at: 20th April
            </p>
            <p className="text-sm text-500">Assignee: Ajay S</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
