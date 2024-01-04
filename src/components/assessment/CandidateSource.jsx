import React from "react";
import styles from "./AssessmentOverview.module.css";
import vector from "../../assests/Vector250.svg";
import source from "../../assests/Frame1000005832.svg";

const CandidateSource = () => {
  return (
    <div className={styles.candidateSourceCard}>
      <h4>Candidate Source</h4>
      <div className={styles.countingContainer}>
        <img src={source} alt="view" />
        <div className={styles.candidateCount}>
          <span className={styles.counting}>11,000</span>
          <p>E-Mail</p>
        </div>
        <img src={vector} alt="vector" />
        <div className={styles.candidateCount}>
          <span className={styles.counting}>145</span>
          <p>Social Share</p>
        </div>
        <img src={vector} alt="vector" />
        <div className={styles.candidateCount}>
          <span className={styles.counting}>145</span>
          <p>Unique Link</p>
        </div>
      </div>
    </div>
  );
};

export default CandidateSource;
