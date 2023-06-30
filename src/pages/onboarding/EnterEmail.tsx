import React, { useContext, useEffect, useState } from "react";
import useReduxState from "../../hooks/useReduxState";
import { FormikContext, useFormik } from "formik";
import InputField from "../../components/inputs/InputField";
import { setOnboardingValues } from "../../features/reducers/onboardingSlice";

interface EnterEmailFormProps {
  onNext: (email: string) => void;
}

const EnterEmailForm = ({ onNext }) => {
  const [getValues, setValues] = useReduxState(
    "onboarding",
    setOnboardingValues.type
  );
  const formik = useContext(FormikContext);
  console.log("values", formik.values);
  console.log("reduxvalues", getValues);

  return (
    <>
      <InputField id="email" name="email" onChange={formik.handleChange} />
    </>
  );
};

export default EnterEmailForm;
