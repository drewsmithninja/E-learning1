import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import { SearchMentors } from "./routes/searchMentors/searchMentors";
import MentorProfile from "./routes/mentor-profile";
import Confirmation from "./routes/confirmation";
import DateTime from "./routes/dateTime";
import Messaging from "./routes/messaging/messaging";

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
        path: "search-mentors/:id",
        element: <MentorProfile />,
      },
      {
        path: "confirmation",
        element: <Confirmation />,
      },
      {
        path: "datetime",
        element: <DateTime />,
      },
      {
        path: "messaging",
        element: <Messaging />,
      },
      { path: "mentor-profile", element: <MentorProfile /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
