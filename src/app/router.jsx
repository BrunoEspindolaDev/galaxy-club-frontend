import { Routes, Route } from "react-router-dom";
import PrivateElement from "components/PrivateElement";

import Login from "pages/Login";
import Home from "pages/Home";
import Reservations from "pages/Reservations";
import Profile from "pages/Profile";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <PrivateElement>
            <Home />
          </PrivateElement>
        }
      />
      <Route
        path="/reservations"
        element={
          <PrivateElement>
            <Reservations />
          </PrivateElement>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateElement>
            <Profile />
          </PrivateElement>
        }
      />
    </Routes>
  );
};

export default Router;
