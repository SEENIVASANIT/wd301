import React from "react";
import TaskCard from "./TaskCard";

function App() {
  return (
    <div className="center">
      <h1 className="flex p-4 font-bold text-4xl">Smarter Tasks</h1>
      <p className="flex p-5 font-bold text-sm">
        Project: Graduation FInal Year Project (Revamp College Website)
      </p>
      <div className="md:flex justify-center md:h-full">
        <div className=" p-5 border border-gray-500 m-4 rounded-lg">
          <h1 className="p-3 text-center">Pending</h1>
          <TaskCard
            title="Build the website with static content"
            dueDate="10th April"
            assigneeName="Rohit S"
          />
          <TaskCard
            title="Add blog"
            dueDate="27nd Jan"
            assigneeName="loght s"
          />
          <button className="">+ Add Task</button>
        </div>
        <div className="w-1/2 p-4 border border-gray-500 m-4 rounded-lg">
          <h1 className="p-3 text-center">Done</h1>
          <TaskCard
            title="Design the mockup"
            completedAtDate="10th jully"
            assigneeName="seeni M"
          />
          <TaskCard
            title="Get approval from principal"
            completedAtDate="26th April"
            assigneeName="jeeva S"
          />
        </div>
      </div>
    </div>
  );
}



export default App;
