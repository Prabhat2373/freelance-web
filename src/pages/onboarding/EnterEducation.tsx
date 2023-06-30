import { FormikContext } from "formik";
import React, { useContext, useState } from "react";

interface EnterEducationDetailsFormProps {
  onNext: (educationDetails: string) => void;
}

const EnterEducationDetailsForm = ({ formik }) => {
  // const formik = useContext(FormikContext);

  return (
    <>
      <label htmlFor="educationDetails">Enter Education Details:</label>
      <textarea
        id="education"
        value={formik.values?.edication}
        onChange={formik.handleChange}
        required
      ></textarea>
      <button type="submit">Next</button>
    </>
  );
};

export default EnterEducationDetailsForm;
