import type { Task } from "../../types/taskTypes";
import TaskCard from "./TaskCard";
import styles from "../../module/tasks.module.css";

type TasksProps = {
  title: string;
  tasks: Task[];
  onMove: (id: number) => void;
  onDelete: (id: number) => void;
};
const Column = ({ title, tasks, onMove, onDelete }: TasksProps) => {
  return (
    <div className={styles.title}>
      <div>
        <h3>
          {title} ({tasks.length})
        </h3>
      </div>
      <div>
        {tasks?.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onMove={onMove}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
