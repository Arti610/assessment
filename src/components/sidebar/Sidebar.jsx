// @start Sidebar Component => Sidebar.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { MenuItems } from "../../utils/MenuItems";
import roundStatus from "../../assests/admin_meds.svg";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {MenuItems?.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          className={styles.menuitemCard}
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "#e5f1fc",
                  border: "1px solid #0073e6",
                  color: "#0073e6",
                }
              : {}
          }
        >
          <div className={styles.iconContainer}>
            <img src={item.icon} alt="icon" className={styles.sidebar_icon} />
          </div>
          <div className={styles.titleContainer}>
            <span>{item?.title ? item?.title : "title"}</span>
          </div>
        </NavLink>
      ))}
      <NavLink
        to="/round_status"
        className={styles.menuitemCard}
        style={({ isActive }) =>
          isActive
            ? {
                backgroundColor: "#e5f1fc",
                border: "1px solid #0073e6",
                color: "#0073e6",
              }
            : {}
        }
      >
        <div className={styles.iconContainer}>
          <img src={roundStatus} alt="icon" className={styles.sidebar_icon} />
        </div>
        <div className={styles.titleContainer}>
          <span>Round Status</span>
        </div>
      </NavLink>
    </div>
  );
};

export default Sidebar;
