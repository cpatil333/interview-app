//import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ProductList from "./components/E-Commerce/ProductList";
import AppLayout from "./components/E-Commerce/AppLayout";
import CartItems from "./components/E-Commerce/CartItems";
import ProductDetails from "./components/E-Commerce/ProductDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <ProductList />,
        },
        {
          path: "/product-list",
          element: <ProductList />,
        },
        {
          path: "/cart-items",
          element: <CartItems />,
        },
        {
          path: "/prodct-details/:id",
          element: <ProductDetails />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
