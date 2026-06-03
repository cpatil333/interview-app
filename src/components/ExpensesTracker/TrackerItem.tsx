import type { Expensetracker } from "../../types/ExpensetrackerTypes";
import styles from "../../module/tracker.module.css";
import { useNavigate } from "react-router-dom";

type TrackerDataProps = {
  trackerData: Expensetracker[];
  onDelete: (id: number) => void;
};

const TrackerItem = ({ trackerData, onDelete }: TrackerDataProps) => {
  const navigate = useNavigate();
  return (
    <div>
      {trackerData.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Title</td>
              <td>Amount</td>
              <td>Category</td>
              <td>Date</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {trackerData.map((track) => (
              <tr key={track.id}>
                <td>{track.title}</td>
                <td>{track.amount}</td>
                <td>{track.category}</td>
                <td>{track.date}</td>
                <td>
                  <button onClick={() => navigate(`/tracker-form/${track.id}`)}>
                    Edit
                  </button>
                  <button onClick={() => onDelete(track.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default TrackerItem;
