import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import LibraryItemsPage from "./pages/LibraryItemsPage";
import LibraryItemFormPage from "./pages/LibraryItemFormPage";
import CategoryFormPage from "./pages/CategoryFormPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Logout from "./components/LogOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "libraryitems", element: <LibraryItemsPage /> },
      {
        path: "libraryitems/:id",
        element: <LibraryItemFormPage />,
      },
      {
        path: "categories/:id",
        element: <CategoryFormPage />,
      },
    ],
  },
  { path: "/logout", element: <Logout /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
]);

export default router;
