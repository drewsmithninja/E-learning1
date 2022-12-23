import React from "react";
import { Outlet } from "react-router-dom";
import NavLoggedIn from "../components/nav/navLoggedIn";
import Footer from "../Pages/Component/Footer";
import { store } from "../app/store";
import { Provider } from "react-redux";

const Root = () => {
  return (
    <Provider store={store}>
      <div className="d-flex flex-column min-vh-100 bg-light">
        <div className="flex-grow-1">
          <NavLoggedIn />
          <Outlet />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default Root;
