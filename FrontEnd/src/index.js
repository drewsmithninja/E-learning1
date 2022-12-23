import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import { SearchMentors } from "./routes/searchMentors/searchMentors";
import Confirmation from "./routes/confirmation";
import DateTime from "./routes/dateTime";

import "./scss/custom.scss";
import "./scss/style.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "search-mentors",
        element: <SearchMentors />,
      },
      {
        path: "confirmation",
        element: <Confirmation />,
      },
      {
        path: "datetime",
        element: <DateTime />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
