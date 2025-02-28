import { Outlet } from "react-router";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import CursorGlowEffect from "../features/CursorGlowEffect";

const MainLayout = () => {
  return (
    <div>
      <div>
        <CursorGlowEffect />
        <div className="">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
