import React, { useState } from "react";
import styles from "./NewAssessmentCard.module.css";
import add from "../../assests/add.svg";
import AddAssessment from "../../utils/Modal/AddAssessment";

const NewAssesmentCard = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div
        className={styles.newAssesmentCard}
        onClick={() => setOpenModal(true)}
      >
        <div className={styles.uploadAssesmentCard}>
          <div className={styles.uploadIconContainer}>
            <img src={add} alt="add" />
          </div>
          <h3>New Assessment</h3>
        </div>
        <p className={styles.newassesmentDesc}>
          From here you can add questions of multiple types like MCQs,
          subjective (text or paragraph)!
        </p>
      </div>
      {openModal ? (
        <AddAssessment openModal={openModal} handleClose={handleClose} />
      ) : null}
    </>
  );
};

export default NewAssesmentCard;
