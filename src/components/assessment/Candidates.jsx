import React from "react";
import styles from "./AssessmentOverview.module.css";
import candidate from "../../assests/Frame1000009353.svg";
import vector from "../../assests/Vector250.svg";

const Candidates = () => {
  return (
    <div className={styles.candidateCard}>
      <h4>Candidates</h4>
      <div className={styles.countingContainer}>
        <img src={candidate} alt="view" />
        <div className={styles.candidateCount}>
          <span className={styles.counting}>11,145</span>
          <p>Total Candidate</p>
        </div>
        <img src={vector} alt="vector" />
        <div className={styles.candidateCount}>
          <span className={styles.counting}>1,14</span>
          <p>Who Attended</p>
        </div>
      </div>
    </div>
  );
};

export default Candidates;
