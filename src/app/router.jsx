import { Routes, Route } from "react-router-dom";
import PrivateElement from "components/PrivateElement";

import Login from "pages/Login";
import Home from "pages/Home";
import Reservation from "pages/Reservation";
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
            <Reservation />
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
