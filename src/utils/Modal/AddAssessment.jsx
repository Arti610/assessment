import React, { useState } from "react";
import styles from "./AddAssessment.module.css";
import cut from "../../assests/cut.svg";
import { Box, Modal } from "@mui/material";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addAssessment } from "../../redux/assessmentSlice";

const AddAssessment = (props) => {
  const dispatch = useDispatch();
  const testPurpose = [
    { value: "Technical Proficiency", label: "Technical Proficiency" },
    {
      value: "Problem Solving",
      label: "Problem Solving and Critical Thinking",
    },
    { value: "Communication Skills", label: "Communication Skills" },
    { value: "Team Collaboration", label: "Team Collaboration" },
    {
      value: "adaptability Learning Agility",
      label: "Adaptability and Learning Agility",
    },
    { value: "attention To Detail", label: "Attention to Detail" },
    { value: "Time Management", label: "Time Management" },
    { value: "Customer Service Skills", label: "Customer Service Skills" },
    { value: "Leadership Potential", label: "Leadership Potential" },
    { value: "Cultural Fit", label: "Cultural Fit" },
  ];
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
    dispatch(addAssessment(values));
    toast.success("Form Submitted successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    props.handleClose();
  };

  const addSkill = (formik) => {
    const trimmedSkill = newSkill.trim();
    if (trimmedSkill !== "") {
      setSkills([...skills, trimmedSkill]);
      formik.setFieldValue("skills", [...skills, trimmedSkill]);
      setNewSkill("");
    }
  };

  return (
    <>
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
          {/* Formik wrapper for form state management */}
          <Formik
            initialValues={{
              assessmentName: "",
              testPurpose: "",
              description: "",
              skills: [],
              duration: "",
            }}
            onSubmit={(values) => handleSubmit(values)}
          >
            {(formik) => (
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
                      {...formik.getFieldProps("assessmentName")}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <span>Purpose of the test is</span>
                    <select
                      name="testPurpose"
                      id="testPurpose"
                      className={styles.input}
                      {...formik.getFieldProps("testPurpose")}
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
                      {...formik.getFieldProps("description")}
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
                    <div id="inputContainer" className={styles.skillContainer}>
                      {skills.map((skill, index) => (
                        <div key={index} className={styles.skills}>
                          <span>{skill}</span>
                          <img
                            src={cut}
                            alt=""
                            className={styles.cutImg}
                            onClick={() => {
                              const updatedSkills = skills.filter(
                                (_, i) => i !== index
                              );
                              setSkills(updatedSkills);
                              formik.setFieldValue("skills", updatedSkills);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <input
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      type="text"
                      placeholder="Type Here"
                      className={styles.input}
                    />
                  </div>
                  <span
                    onClick={() => addSkill(formik)}
                    className={styles.addButton}
                  >
                    Add Skill
                  </span>
                  <div className={styles.inputContainer}>
                    <span>Duration of assessment</span>
                    <input
                      type="text"
                      placeholder="HH:MM:SS"
                      className={styles.input}
                      {...formik.getFieldProps("duration")}
                    />
                  </div>
                </div>
                <div className={styles.modalFooter}>
                  <button type="button" onClick={formik.handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default AddAssessment;
