export type ProcessData = {
  id: number;
  status: "pending" | "running" | "paused" | "completed";
  current: number;
  progress: number;
  total: number;
};
