import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import cut from "../../assests/cut.svg";
import { MenuItems } from "../../utils/MenuItems";
import roundStatus from "../../assests/admin_meds.svg";

const SidebarMb = (props) => {
  return (
    <div className={styles.mbSidebar}>
      <div className={styles.mbSidebarMenu}>
        <h4>Menu</h4>
        <img src={cut} alt="cut" onClick={props.handleClose} />
      </div>
      {MenuItems?.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          className={styles.mbDashboard}
          activeClassName={styles.activeLink}
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
          <img src={item.icon} alt="icons" />
          <h4>{item?.title ? item?.title : "title"}</h4>
        </NavLink>
      ))}
      <div className={styles.roundStatus}>
        <div className={styles.rs}>
          <img src={roundStatus} alt="roundStatus" />
          <h4>Round Status</h4>
        </div>
        <p className={styles.adminUser}>Admin</p>
      </div>
    </div>
  );
};

export default SidebarMb;
