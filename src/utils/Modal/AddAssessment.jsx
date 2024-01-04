import React from "react";
import styles from "./AddAssessment.module.css";
import cut from "../../assests/cut.svg";
import { Box, Modal } from "@mui/material";

const AddAssessment = (props) => {
  const testPurpose = [
    { value: "technical_proficiency", label: "Technical Proficiency" },
    {
      value: "problem_solving",
      label: "Problem Solving and Critical Thinking",
    },
    { value: "communication_skills", label: "Communication Skills" },
    { value: "team_collaboration", label: "Team Collaboration" },
    {
      value: "adaptability_learning_agility",
      label: "Adaptability and Learning Agility",
    },
    { value: "attention_to_detail", label: "Attention to Detail" },
    { value: "time_management", label: "Time Management" },
    { value: "customer_service_skills", label: "Customer Service Skills" },
    { value: "leadership_potential", label: "Leadership Potential" },
    { value: "cultural_fit", label: "Cultural Fit" },
  ];

  return (
    <Modal
      open={props.openModal}
      onClose={props.handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: `clamp(300px, 50%, 500px)`,
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          borderRadius: "8px",
        }}
      >
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h3>Create new assessment</h3>
            <img
              src={cut}
              alt="cross"
              style={{ cursor: "pointer" }}
              onClick={props.handleClose}
            />
          </div>
          <div className={styles.modalBody}>
            <div className={styles.inputContainer}>
              <span>Name of assessment</span>
              <input
                type="text"
                placeholder="Type Here"
                className={styles.input}
              />
            </div>
            <div className={styles.inputContainer}>
              <span>Purpose of the test is</span>
              <select
                name="testPurpose"
                id="testPurpose"
                className={styles.input}
              >
                <option label="select" />
                {testPurpose.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.inputContainer}>
              <span>Description</span>
              <select
                name="testPurpose"
                id="testPurpose"
                className={styles.input}
              >
                <option label="select" />
                {testPurpose.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.inputContainer}>
              <span>Skills</span>
              <input
                type="text"
                placeholder="Type Here"
                className={styles.input}
              />
            </div>
            <div className={styles.inputContainer}>
              <span>Duration of assessment</span>
              <input
                type="text"
                placeholder="HH:MM:SS"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.modalFooter}>
            <button>Submit</button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default AddAssessment;
