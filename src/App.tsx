import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ExpenseTrackerPage from "./pages/ExpenseTrackerPage";
import TrackerList from "./components/ExpensesTracker/TrackerList";
import TrackerForm from "./components/ExpensesTracker/TrackerForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ExpenseTrackerPage />,
    },
    {
      path: "/epenses-tracker",
      element: <TrackerList />,
    },
    {
      path: "/tracker-form",
      element: <TrackerForm />,
    },
    {
      path: "/tracker-form/:trackId",
      element: <TrackerForm />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
