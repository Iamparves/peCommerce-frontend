import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Header";
import AutoScrollToTop from "./AutoScrollToTop";

const Layout = () => {
  return (
    <div>
      <AutoScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
