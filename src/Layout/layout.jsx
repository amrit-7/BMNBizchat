import { Outlet } from "react-router-dom";
import NavigationBar from "../components/navbar/navbar";
import SideMenu from "../components/sideMenu/sideMenu";
import "./layout.styles.scss";
const Layout = () => {
  return (
    <div>
      <div className="top">
        <NavigationBar />
      </div>
      <div className="parent">
        <SideMenu />
        <div className="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
