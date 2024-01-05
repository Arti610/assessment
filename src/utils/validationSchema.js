import * as Yup from "yup";

export const validationSchema = Yup.object({
  assessmentName: Yup.string().required("Name of assessment must be required"),
  testPurpose: Yup.string().required("Purpose of text must be required"),
  description: Yup.string().required("Description text must be required"),
  duration: Yup.string().required("Duration must be required"),
});
