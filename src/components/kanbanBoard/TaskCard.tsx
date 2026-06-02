import type { Task } from "../../types/taskTypes";

type taskProps = {
  task: Task;
  onMove: (id: number) => void;
  onDelete: (id: number) => void;
};
const TaskCard = ({ task, onMove, onDelete }: taskProps) => {
  return (
    <div>
      <p>{task.title}</p>
      {task.status === "todo" && (
        <button onClick={() => onMove(task.id)}>[Move To Progress]</button>
      )}
      {task.status === "in-progress" && (
        <button onClick={() => onMove(task.id)}>[Move To Done]</button>
      )}
      <br />
      <button onClick={() => onDelete(task.id)}>[Delete]</button>
    </div>
  );
};

export default TaskCard;
