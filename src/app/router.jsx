import { Routes, Route } from "react-router-dom";

import Login from "pages/Login";
import Register from "pages/Register";
import Home from "pages/Home";
import Reservations from "pages/Reservations";
import Profile from "pages/Profile";
import ModalReservaiton from "pages/ModalReservation/ModalReservation";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />}>
        <Route path="reservation" element={<ModalReservaiton />} />
      </Route>
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Router;
