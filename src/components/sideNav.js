import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideNav.css";

const SideNav = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Function to toggle collapse
  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <div
      className={`sidenav ${collapsed ? "collapsed" : ""}`}
      onClick={toggleCollapse} // 👈 clicking anywhere collapses/expands
    >
      <nav>
        <NavLink
          to="/photos"
          className="sidenav-link"
          onClick={(e) => e.stopPropagation()} // Prevent collapse on link click
        >
          📷 {!collapsed && "Photos"}
        </NavLink>

        <NavLink
          to="/videos"
          className="sidenav-link"
          onClick={(e) => e.stopPropagation()}
        >
          🎥 {!collapsed && "Videos"}
        </NavLink>

        <NavLink
          to="/ambedkar-philosophy"
          className="sidenav-link"
          onClick={(e) => e.stopPropagation()}
        >
          📘 {!collapsed && "Ambedkar Philosophy"}
        </NavLink>

        <NavLink
          to="/dhamadeshana"
          className="sidenav-link"
          onClick={(e) => e.stopPropagation()}
        >
          🪷 {!collapsed && "Dhamadeshana"}
        </NavLink>
      </nav>
    </div>
  );
};

export default SideNav;
