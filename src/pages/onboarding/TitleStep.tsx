import React, { useContext } from "react";
import InputField from "../../components/inputs/InputField";
import { FormikContext } from "formik";

const TitleStep = ({formik}) => {
  // const formik = useContext(FormikContext);
  return (
    <div>
      <InputField
        placeholder="Give title"
        onChange={formik.handleChange}
        name="title"
        value={formik.values.title}
      />
    </div>
  );
};

export default TitleStep;
