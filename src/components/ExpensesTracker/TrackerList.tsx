import { useState, useEffect, type ChangeEvent } from "react";
import TrackerItem from "./TrackerItem";
import styles from "../../module/tracker.module.css";
import { useNavigate } from "react-router-dom";
import type { Expensetracker } from "../../types/ExpensetrackerTypes";

const intialTrackerData: Expensetracker[] = [];

const TrackerList = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const [searchData, setSeachData] = useState<Expensetracker[]>([]);
  const [trackerData, setTrackerData] = useState(() => {
    const storedExpenses = localStorage.getItem("expenses");

    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  const totalExpense = trackerData.reduce(
    (sum, item) => sum + Number(item.amount),
    0,
  );
  useEffect(() => {
    const filteredData = trackerData.filter((item: Expensetracker) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.category.toLowerCase().includes(searchText.toLowerCase());

      const matchesCategory =
        selectedText === "" ||
        selectedText === "select" ||
        selectedText === "all" ||
        item.category.toLowerCase() === selectedText.toLowerCase();

      return matchesSearch && matchesCategory;
    });

    setSeachData(filteredData);
  }, [trackerData, searchText, selectedText]);

  const handleDelete = (id: number) => {
    //console.log(id);
    try {
      const updatedTracker = trackerData.filter((item: Expensetracker) => {
        return item.id !== id;
      });
      console.log(updatedTracker);

      localStorage.setItem("expenses", JSON.stringify(updatedTracker));

      setTrackerData(updatedTracker);
    } catch (error) {
      console.error(error);
    }
  };

  const searchTrackerData = searchData.length >= 0 ? searchData : trackerData;

  return (
    <div>
      <div style={{ display: "flex" }}>
        <button
          className={styles.btn}
          onClick={() => navigate("/tracker-form")}
        >
          + Add Expense
        </button>
        <input
          type="text"
          placeholder="Search here...."
          className={styles.search}
          name="searchText"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select
          name="category"
          onChange={(e) => setSelectedText(e.target.value)}
        >
          <option value="select">---Select---</option>
          <option value="all">All</option>
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="shopping">Shopping</option>
          <option value="entertainment">Entertainment</option>
        </select>
        <p style={{ fontSize: "15px" }}>Total Expense: ₹{totalExpense}</p>
      </div>
      <TrackerItem trackerData={searchTrackerData} onDelete={handleDelete} />
    </div>
  );
};

export default TrackerList;
