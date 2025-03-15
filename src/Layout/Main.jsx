/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Navber from "../page/Shared/Navber";
import Footer from "../page/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
