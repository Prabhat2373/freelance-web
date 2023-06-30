import { FormikContext } from "formik";
import React, { useContext, useState } from "react";

interface AddExperienceFormProps {
  formik: any;
}

const AddExperienceForm: React.FC<AddExperienceFormProps> = ({ formik }) => {
  // const formik = useContext(FormikContext);
  return (
    <>
      <label htmlFor="experience">Add Experience:</label>
      <textarea
        id="experience"
        value={formik.values.experience}
        onChange={formik.handleChange}
        required
      ></textarea>
    </>
  );
};

export default AddExperienceForm;
