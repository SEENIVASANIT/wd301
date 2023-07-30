import TaskCard from './TaskCard';

import './TaskCard.css'
import React from "react";


function App() {
  return (
    <div >
      <h1 className='px-3 text-2xl font-semibold flex justify-center'> Smarter Tasks</h1>
      <p className='px-3 text-xl flex justify-center'> Project : Graduation Final Year Project (Revamp College Website)</p>
    <div className='flex border-black py-6 justify-center'>
      <div className="bg-gray-700 text-black border-2 border-black rounded-lg p-4 m-2" >
        <h1 className="text-xl font-bold px-20 items-center" > Pending</h1>
        <TaskCard title="Build The Website With Static Content" dueDate='10th April' assigneeName='Rohit S'  ></TaskCard>
        <TaskCard title="Add a Blog" dueDate='22nd March' assigneeName='Rohit M'  ></TaskCard>
        <h4 className='bg-gray-900 cursor-pointer rounded px-3'> + New Task</h4>
      </div>
      <div className="bg-gray-700 text-black border-2 border-black rounded-lg p-4 m-2">
        <h1 className="text-xl font-bold px-20 " >Done</h1>
        <TaskCard title="Design The Mockup" completedAtDate='10th April' assigneeName='Rohit M'></TaskCard>
        <TaskCard title="Get Approval From Principal" completedAtDate='20th April' assigneeName='Ajay S'></TaskCard>

      </div>
    </div>
    </div>
  );
}

export default App;
