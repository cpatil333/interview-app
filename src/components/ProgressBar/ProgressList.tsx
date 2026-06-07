import { useState, useEffect } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import type { ProcessData } from "../../types/processType";
import styles from "../../module/ProgressBar.module.css";

const initialData: ProcessData[] = [
  { id: 1, progress: 50, status: "pending", current: 25, total: 100 },
  { id: 2, progress: 80, status: "running", current: 50, total: 100 },
  { id: 3, progress: 50, status: "paused", current: 40, total: 100 },
  { id: 4, progress: 100, status: "completed", current: 100, total: 100 },
];

const ProgressList = () => {
  const [processes, setProcesses] = useState<ProcessData[]>(initialData);

  const getButtonLabel = (status: string) => {
    switch (status) {
      case "pending":
        return "Start";
      case "running":
        return "Pause";
      case "paused":
        return "Resume";
      case "completed":
        return "Completed";
      default:
        return status;
    }
  };

  useEffect(() => {
    const intervals = processes.map((process, index) => {
      if (process.status !== "running") return null;

      return setInterval(() => {
        setProcesses((prevProcesses) =>
          prevProcesses.map((p, i) => {
            if (i === index) {
              const nextCurrent = p.current + 1;
              const nextPercent = (nextCurrent / p.total) * 100;

              if (nextPercent >= 100) {
                return { ...p, current: p.total, status: "completed" };
              }
              return { ...p, current: nextCurrent };
            }
            return p;
          }),
        );
      }, 100);
    });

    // Clean up all intervals on unmount or state change
    return () => {
      intervals.forEach((interval) => {
        if (interval) clearInterval(interval);
      });
    };
  }, [processes]);

  const handleBarProcess = (id: number) => {
    setProcesses((prevProcesses) =>
      prevProcesses.map((process) => {
        if (process.id === id) {
          if (process.status === "running") {
            return { ...process, status: "paused" };
          }
          if (process.status === "pending" || process.status === "paused") {
            return { ...process, status: "running" };
          }
        }
        return process;
      }),
    );
  };

  return (
    <div>
      {processes.map((process) => {
        const percent = (process.current / process.total) * 100;
        return (
          <div key={process.id}>
            <ProgressBar percent={percent} status={process.status} />
            <button
              className={styles.btn}
              onClick={() => handleBarProcess(process.id)}
              disabled={process.status === "completed"}
            >
              {getButtonLabel(process.status)}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressList;
