import React from "react";
import styles from "./AssessmentCard.module.css";
import linkIcon from "../../assests/link.svg";
import dots from "../../assests/Group6.svg";
import border from "../../assests/Vector333.svg";
import calender from "../../assests/calendar_today.svg";
import assesmentIcon from "../../assests/Frame1000008703.svg";
import { assesmentData } from "../../utils/assessmentData";

const AssesmentCard = () => {
  return (
    <>
      {assesmentData?.map((item) => (
        <div className={styles.assesmentCard} key={item?.id}>
          <div className={styles.assesmentCardTopContainer}>
            <div className={styles.topLeftContainer}>
              <img src={assesmentIcon} alt="assesment icon" />
              <div className="contentContainer">
                <h3>{item?.title}</h3>
                <div className={styles.datecontainer}>
                  <span>{item?.type}</span>
                  <img src={border} alt="border" />
                  <img src={calender} alt="calender" />
                  <span>{item?.date}</span>
                </div>
              </div>
            </div>
            <div className={styles.topRightContainer}>
              <img src={dots} alt="dots" />
            </div>
          </div>
          <div className={styles.assesmentCardBottomContainer}>
            <div className={styles.assesmentCardBottomLeftContainer}>
              <div className={styles.dqContainer}>
                <p className={styles.counting}>{item?.duration}</p>
                <p>{item?.durationTitle}</p>
              </div>
              <div className={styles.dqContainer}>
                <p className={styles.counting}>{item?.question}</p>
                <p>{item?.questionTitle}</p>
              </div>
            </div>
            <div className={styles.assesmentCardBottomRightContainer}>
              <div className={styles.shareContainer}>
                <img src={linkIcon} alt="link icon" />
                <span>Share</span>
              </div>

              {item?.user.map((user, i) => (
                <div className={styles.userContainer} key={i}>
                  <p className={styles.userProfile}>{user?.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AssesmentCard;
