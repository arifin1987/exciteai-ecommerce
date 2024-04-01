import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import ResNavBar from "./ResNavBar";

const Mainlayout = () => {
  return (
    <div>
      <ResNavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Mainlayout;
