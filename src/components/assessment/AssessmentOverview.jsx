import React from "react";
import TotalAssessment from "./TotalAssessment";
import styles from "./AssessmentOverview.module.css";
import TotalPurpose from "./TotalPurpose";
import Candidates from "./Candidates";
import CandidateSource from "./CandidateSource";
const AssessmentOverview = () => {
  return (
    <>
      <div className={styles.assessmentOverview}>
        <TotalAssessment />
        <Candidates />
        <CandidateSource />
        <TotalPurpose />
      </div>
      <div className={styles.assessmentOverviewMb}>
        <div className={styles.mbwidth}>
          <TotalAssessment />
          <TotalPurpose />
        </div>
        <Candidates />
        <CandidateSource />
      </div>
    </>
  );
};

export default AssessmentOverview;
