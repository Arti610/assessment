import React, { useEffect, useState } from "react";
import styles from "./Assessment.module.css";
import vector from "../assests/Vector298.svg";
import AssesmentCard from "../components/assessment/AssessmentCard";
import NewAssesmentCard from "../components/assessment/NewAssessmentCard";
import AssessmentOverview from "../components/assessment/AssessmentOverview";
import barChart from "../assests/bar_chart.svg";
import filter from "../assests/filter_list_alt.svg";
import search from "../assests/search.svg";
import segment from "../assests/segment.svg";
import SidebarMb from "../components/sidebar/SidebarMb";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { selectAssessments } from "../redux/assessmentSlice";
const Assessment = () => {
  const assessmentData = useSelector(selectAssessments);
  console.log("assessmentData", assessmentData);

  const [filterToggle, setFilterToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarShow, setSidebarShow] = useState(false);
  const handleClose = () => {
    setSidebarShow(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {sidebarShow ? <SidebarMb handleClose={handleClose} /> : null}
      <div className={styles.contentArea}>
        {isMobile ? (
          <div className={styles.contentContainerTop}>
            <img
              src={segment}
              alt="segment"
              className={styles.segment}
              onClick={() => setSidebarShow(true)}
            />
            <h3>Assessment</h3>
          </div>
        ) : null}
        <div className={styles.contentContainerMid}>
          <div className={styles.navigation}>
            {!isMobile ? (
              <h3>Assessment</h3>
            ) : (
              <>
                <h3 className={styles.navigationTitle}>My Assessment</h3>
                <img src={vector} alt="vector" />
              </>
            )}
            {!isMobile ? (
              <p className={styles.navigationTitle}>My Assessments</p>
            ) : (
              <h4>Unstop Assessments</h4>
            )}
          </div>
        </div>
        <div className={styles.contentContainerBottom}>
          {!isMobile ? (
            <div className={styles.assesmentOverview}>
              <div className={styles.myAssesmentTitle}>
                <h3>Assessments Overview</h3>
              </div>
              <AssessmentOverview />
            </div>
          ) : filterToggle ? (
            <div className={styles.assesmentOverview}>
              <div className={styles.myAssesmentTitle}>
                <h3>Assessments Overview</h3>
              </div>
              <AssessmentOverview />
            </div>
          ) : null}
          <div className={styles.myAssesment}>
            <div className={styles.myAssesmentTitle}>
              <h3>My Assessment</h3>
              <div className={styles.mbFilter}>
                <img src={search} alt="search" className={styles.imgsfb} />
                <img src={filter} alt="filter" className={styles.imgsfb} />
                <img
                  src={barChart}
                  alt="barchart"
                  className={styles.imgsfb}
                  onClick={() => setFilterToggle(!filterToggle)}
                />
              </div>
            </div>
            <div className={styles.myAssesmentCard}>
              <NewAssesmentCard />
              <AssesmentCard />
            </div>
          </div>
        </div>
      </div>
      {assessmentData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name of Assessment</th>
              <th>Purpose of the test is</th>
              <th>Description</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {assessmentData.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item?.assessmentName}</td>
                  <td>{item?.testPurpose}</td>
                  <td>{item?.description}</td>

                  <td>{item?.duration}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <ToastContainer />
    </>
  );
};

export default Assessment;
