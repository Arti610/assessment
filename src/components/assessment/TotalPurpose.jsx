import React from "react";
import styles from "./AssessmentOverview.module.css";
import purpose from "../../assests/Frame1000009100.svg";

const TotalPurpose = () => {
  return (
    <div className={styles.TPcard} style={{ borderRight: "1px solid #dadce0" }}>
      <h4>Total Purpose</h4>
      <div className={styles.countingContainer}>
        <img src={purpose} alt="view" />
        <span className={styles.counting}>11</span>
      </div>
    </div>
  );
};

export default TotalPurpose;
