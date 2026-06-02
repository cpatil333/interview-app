import styles from "../../module/ProgressBar.module.css";

type ProgressPops = {
  percent: number;
  status: string;
};

const ProgressBar = ({ percent, status }: ProgressPops) => {
  return (
    <div>
      <div className={styles.progressbar}>
        <div
          className={styles.progressbarfill}
          style={{
            width: `${percent}%`,
            borderRadius: 5,
            backgroundColor: status === "completed" ? "#76c893" : "#3b82f6",
          }}
        >
          {Math.round(percent)}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
