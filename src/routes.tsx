import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import LibraryItemsPage from "./pages/LibraryItemsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "libraryitems", element: <LibraryItemsPage /> },
      //   {
      //     path: "libraryitems/:id",
      //     element: <ProtectedRoute />,
      //     children: [{ index: true, element: <FoodFormPage /> }],
      //   },
    ],
  },
]);

export default router;
