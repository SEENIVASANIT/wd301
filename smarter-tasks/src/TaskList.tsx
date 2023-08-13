import Task from "./Task";
import { taskItem } from "./types";

interface Props {
  tasks: taskItem[];
  deleteTaskItem: (id:number) => void
}

const TaskList = (props:Props) => {
  const list = props.tasks.map((task, id) => (
    <Task key={id} title={task.title} date={task.date} desc={task.desc} deleteTaskItem={() => { props.deleteTaskItem(id) }} />
  ));
    return <>{list}</>

}

export default TaskList;
