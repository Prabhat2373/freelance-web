import { FormikContext } from "formik";
import React, { useContext, useState } from "react";

interface SelectLanguageFormProps {
  onNext: (language: string) => void;
}

const SelectLanguageForm: React.FC<SelectLanguageFormProps> = ({ formik }) => {
  // const formik = useContext(FormikContext);
  return (
    <>
      <label htmlFor="language">Select Language:</label>
      <select
        id="language"
        value={formik.values.language}
        onChange={(e) => formik.setFieldValue("language", e.target.value)}
        required
      >
        <option value="">-- Select Language --</option>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
      </select>
      <button type="submit">Next</button>
    </>
  );
};

export default SelectLanguageForm;
