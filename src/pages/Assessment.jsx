import React from "react";
import styles from "./Assessment.module.css";
import vector from "../assests/Vector298.svg";
import AssesmentCard from "../components/assessment/AssessmentCard";
import NewAssesmentCard from "../components/assessment/NewAssessmentCard";
import AssessmentOverview from "../components/assessment/AssessmentOverview";
const Assessment = () => {
  return (
    <div className={styles.contentArea}>
      <div className={styles.contentContainerTop}>
        <div className={styles.navigation}>
          <h3>Assessment</h3>
          <img src={vector} alt="vector" />
          <p className={styles.navigationTitle}>My Assessments</p>
        </div>
      </div>
      <div className={styles.contentContainerBottom}>
        <div className={styles.assesmentOverview}>
          <div className={styles.myAssesmentTitle}>
            <h3>Assessments Overview</h3>
          </div>
          <AssessmentOverview />
        </div>
        <div className={styles.myAssesment}>
          <div className={styles.myAssesmentTitle}>
            <h3>My Assessment</h3>
          </div>
          <div className={styles.myAssesmentCard}>
            <NewAssesmentCard />
            <AssesmentCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
