import React, { useContext } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useOnboardingForm } from "../../context/FormContext";
import StepLayout from "../../layout/freelancer/StepLayout";
import Button from "@/components/buttons/Button";

const SelectLanguageForm = () => {
  const { formData, setFormData, activeStepIndex, setActiveStepIndex } =
    useOnboardingForm();

  const initialValues = {
    language: formData.language || "",
  };

  const validationSchema = Yup.object({
    language: Yup.string().required("Language is required"),
  });

  const handleSubmit = (values: any) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      language: values.language,
    }));
    setActiveStepIndex(activeStepIndex + 1);
    // Do something with the form values
    console.log("Form values:", values);
  };

  return (
    <StepLayout
      title={"Add languages."}
      subTitle={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod."
      }
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="language">Select Language:</label>
          <Field as="select" id="language" name="language" required>
            <option value="">-- Select Language --</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </Field>
          <div className="flex justify-center items-center py-12">
            <Button
              width="60%"
              variant="filled"
              className="flex px-24"
              type="submit"
            >
              Next
            </Button>
          </div>
        </Form>
      </Formik>
    </StepLayout>
  );
};

export default SelectLanguageForm;
