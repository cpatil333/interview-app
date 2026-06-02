import type { Task } from "../../types/taskTypes";

type AddTaskProps = {
  inputValue: Task;
  setInputValue: React.Dispatch<React.SetStateAction<Task>>;
};

const AddTask = ({ inputValue, setInputValue }: AddTaskProps) => {
  return (
    <div>
      <h3>Add Task</h3>
      <div>
        <input
          type="text"
          placeholder="Enter Task..."
          value={inputValue.title}
          onChange={(e) =>
            setInputValue((prev) => ({
              ...prev,
              title: e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
};

export default AddTask;
