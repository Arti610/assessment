import React from "react";
import styles from "./AssessmentOverview.module.css";
import viewAgenda from "../../assests/viewagenda.svg";

const TotalAssessment = () => {
  return (
    <div
      className={styles.TAcard}
      style={{ borderRight: "1px solid #dadce0;" }}
    >
      <h4>Total Assessment</h4>
      <div className={styles.countingContainer}>
        <img src={viewAgenda} alt="view" className={styles.imgBg} />
        <span className={styles.counting}>34</span>
      </div>
    </div>
  );
};

export default TotalAssessment;
