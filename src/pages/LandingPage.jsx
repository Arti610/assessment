import React from "react";
import styles from "./LandingPage.module.css";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={styles.contentbarContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default LandingPage;
