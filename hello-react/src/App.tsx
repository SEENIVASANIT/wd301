import { useState } from 'react'
import TaskCard from './TaskCard'
import React from 'react'
function App() {
  return (
    <>
    <h1 className='text-xl font-bold'>Smarter Tasks</h1>
    <h1 >Project:<span className='text-gray-500'>Graduation Final Year Project(Revamp College Website)</span></h1>
    <div className='flex flex-row'>
  <div>
    <h1 className='text-xl font-bold'>Pending</h1>
  <TaskCard Completed_on="Due on:" Assignee="Assignee:" title="mvbncnvcb" due_date="20-10-2002" name="seenivasan"></TaskCard>
  <TaskCard Completed_on="Due on:" Assignee="Assignee:" title="mvbncnvcb" due_date="20-10-2002" name="seenivasan"></TaskCard>
  <button className='bg-slate-400 hover:bg-blue-300 text-yellow-300 font-bold py-2 px-4 rounded'>New Task</button>

  </div>
  <div>
    <h1 className='text-xl font-bold'>Done</h1>
  <TaskCard Completed_on="Completed on:" Assignee="Assignee:" title="mvbncnvcb" due_date="20-10-2002" name="seenivasan"></TaskCard>
  <TaskCard Completed_on="Completed on:" Assignee="Assignee:" title="mvbncnvcb" due_date="20-10-2002" name="seenivasan"></TaskCard>
  </div>
  </div>
  
  
    </>
  )
}

export default App
