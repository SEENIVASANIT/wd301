import "./TaskCard.css";

interface TaskProp {
  title: string;
  date: string
  desc:string
  deleteTaskItem: () => void
}

const Task = (props:TaskProp) => {

    return (
      <div className="TaskItem shadow-md border border-slate-00">
        <h3 className="font-bold text-2xl ">{props.title} <span className=" text-sm rounded-xl p-2">({props.date})</span></h3>
        <p className="text-lg text-gray-900">{props.desc}</p>
        <button className="deleteTaskButton text-sm bg-red-500 p-1  my-2 rounded-xl" onClick={props.deleteTaskItem}>Delete</button>
      </div>
    );
}

export default Task;
