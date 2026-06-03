import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
  type SubmitEvent,
} from "react";
import styles from "../../module/tracker.module.css";
import { useNavigate, useParams } from "react-router-dom";
import type { Expensetracker } from "../../types/ExpensetrackerTypes";
import type { SyntheticEvent } from "react";
import { checkTrackerExpesensForm } from "../../utils/checkTrackerExpesensForm";

const TrackerForm = () => {
  // const handleSubmit = (e: SyntheticEvent) => {
  //   e.preventDefault();
  // };
  const navigate = useNavigate();
  const { trackId } = useParams();
  const [inputValue, setInputValue] = useState<Expensetracker>({
    id: 0,
    title: "",
    amount: 0,
    category: "",
    date: "",
  });

  useEffect(() => {
    if (trackId) {
      const trackerArrayData: Expensetracker[] = JSON.parse(
        localStorage.getItem("expenses") || "[]",
      );

      //console.log(trackerArrayData);
      const expense = trackerArrayData.find(
        (item: Expensetracker) => item.id === Number(trackId),
      );

      console.log(expense);
      if (expense) {
        setInputValue(expense);
      }
    }
  }, [trackId]);

  const handleSubmit = (e: SyntheticEvent) => {
    // console.log(inputValue);
    e.preventDefault();
    if (!checkTrackerExpesensForm(inputValue)) return;
    try {
      //update expense on id
      if (trackId) {
        const storedExpenses: Expensetracker[] = JSON.parse(
          localStorage.getItem("expenses") || "[]",
        );
        const udpatedExpenses = storedExpenses.map((item) =>
          item.id === Number(trackId)
            ? {
                ...item,
                title: inputValue.title,
                amount: inputValue.amount,
                category: inputValue.category,
                date: inputValue.date,
              }
            : item,
        );
        localStorage.setItem("expenses", JSON.stringify(udpatedExpenses));
        navigate("/epenses-tracker");
      } else {
        //add new expeses
        const expense = {
          ...inputValue,
          id: Date.now(),
        };
        const existingExpenses = JSON.parse(
          localStorage.getItem("expenses") || "[]",
        );

        existingExpenses.push(expense);

        localStorage.setItem("expenses", JSON.stringify(existingExpenses));
        navigate("/epenses-tracker");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return (
    <div>
      <h3>Tracker Form</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter Title"
              name="title"
              value={inputValue.title}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter Amout"
              name="amount"
              value={inputValue.amount}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <select
              name="category"
              value={inputValue.category}
              onChange={handleInputChange}
            >
              <option value="select">---Select---</option>
              <option value="food">Food</option>
              <option value="travel">Travel</option>
              <option value="shopping">Shopping</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </div>
          <div>
            <input
              type="date"
              placeholder="Enter Date"
              name="date"
              value={inputValue.date}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button type="submit">{trackId ? "Update" : "Submit"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrackerForm;
