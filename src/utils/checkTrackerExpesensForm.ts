import type { Expensetracker } from "../types/ExpensetrackerTypes";

export const checkTrackerExpesensForm = (data: Expensetracker): boolean => {
  if (data.title.trim() === "") {
    alert("Title is required");
    return false;
  } else if (data.amount <= 0) {
    alert("Amount must be greater than 0");
    return false;
  } else if (data.category.trim() === "") {
    alert("Category is required");
    return false;
  } else if (data.date.trim() === "") {
    alert("Date is required");
    return false;
  }
  return true;
};
