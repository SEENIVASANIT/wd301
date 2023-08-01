import "./TaskCard.css";
import React from "react";
interface propTitle {
  completedAtDate?: string;
  title: string;
  dueDate?: string;
  assigneeName: string;
}
var store_value = "";
let TaskCard = (props: propTitle) => {
  store_value = props.dueDate
    ? `Due on: ${props.dueDate}`
    : `Completed on: ${props.completedAtDate}`;
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>{store_value}</p>
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
};
export default TaskCard;
