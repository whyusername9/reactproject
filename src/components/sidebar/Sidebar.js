import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>Management</h2>
        <div className="sidebar__link">
          <i className="fa fa-male "></i>
          <a href="#">Clients</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-user"></i>
          <a href="#">Supervisor</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sitemap " aria-hidden="true"></i>
          <a href="#">Sites</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#">Vendors</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-book"></i>
          <a href="#">Contracts</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-briefcase "></i>
          <a href="#">Inventory</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-road"></i>
          <a href="#">Contractor</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <a href="#">Cash Flow</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
