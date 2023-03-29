import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./sidemenu.scss";
const SideMenu = () => {
  return (
    <div style={{ display: "flex", height: "100%", minHeight: "90vh" }}>
      <Sidebar defaultCollapsed collapsedWidth="60px">
        <Menu>
          <MenuItem>
            <i className="fa-solid fa-inbox"></i>
          </MenuItem>
          <MenuItem>
            <i className="fa-solid fa-bullhorn"></i>
          </MenuItem>
          <MenuItem>
            <i className="fa-solid fa-table-columns"></i>
          </MenuItem>
          <Link to="/allusers">
            <MenuItem>
              <i className="fa-solid fa-users"></i>
            </MenuItem>
          </Link>
          <MenuItem>
            <i className="fa-solid fa-robot"></i>
          </MenuItem>
          <MenuItem>
            <i className="fa-solid fa-chart-simple"></i>
          </MenuItem>
        </Menu>
        <Menu className="bottom-options" style={{ marginTop: "200px" }}>
          <MenuItem>
            <i class="fa-solid fa-circle-question"></i>
          </MenuItem>
          <MenuItem>
            <i class="fa-solid fa-gear"></i>
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideMenu;
