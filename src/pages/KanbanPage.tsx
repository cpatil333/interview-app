import { useState, type SubmitEvent } from "react";
import Column from "../components/kanbanBoard/Column";
import styles from "../module/tasks.module.css";
import AddTask from "../components/kanbanBoard/AddTask";

const initialTasksData = [
  {
    id: 1,
    title: "Learn React",
    status: "todo",
  },
  {
    id: 2,
    title: "Build Chat App",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Create Todo App",
    status: "done",
  },
];
const KanbanPage = () => {
  const [tasks, setTasks] = useState(initialTasksData);
  const [inputValue, setInputValue] = useState({
    id: 0,
    title: "",
    status: "",
  });

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  const handleMoveTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id && task.status === "todo") {
          return {
            ...task,
            status: "in-progress",
          };
        }
        if (task.id === id && task.status === "in-progress") {
          return {
            ...task,
            status: "done",
          };
        }
        return task;
      }),
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!inputValue.title.trim()) return;

      const newTask = {
        id: Date.now(),
        title: inputValue.title,
        status: "todo",
      };

      setTasks((prev) => [...prev, newTask]);
      setInputValue({
        id: 0,
        title: "",
        status: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.tasks}>
      <form onSubmit={handleSubmit}>
        <AddTask inputValue={inputValue} setInputValue={setInputValue} />
        <button type="submit" disabled={!inputValue.title.trim()}>
          Submit
        </button>
      </form>
      <Column
        title="TODO"
        tasks={todoTasks}
        onMove={handleMoveTask}
        onDelete={handleDeleteTask}
      />
      <Column
        title="IN PROGRESS"
        tasks={inProgressTasks}
        onMove={handleMoveTask}
        onDelete={handleDeleteTask}
      />
      <Column
        title="DONE"
        tasks={doneTasks}
        onMove={handleMoveTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default KanbanPage;
