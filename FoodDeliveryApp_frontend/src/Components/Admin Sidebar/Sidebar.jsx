import React from "react";
import "./Sidebar.css";
import { adminAssets } from "../../assets/adminAssets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar  ">
      <div className="sidebar-options">
        <>
          <NavLink to="/admin/add" className="sidebar-option">
            <img src={adminAssets.add_icon} alt="" />
            <p className="mt-3">Add Items</p>
          </NavLink>

          <NavLink to="/admin/list" className="sidebar-option">
            <img src={adminAssets.order_icon} alt="" />
            <p className="mt-3">List Items</p>
          </NavLink>

          <NavLink to="/admin/orders" className="sidebar-option">
            <img src={adminAssets.order_icon} alt="" />
            <p className="mt-3">Orders</p>
          </NavLink>
        </>
      </div>
    </div>
  );
};

export default Sidebar;
