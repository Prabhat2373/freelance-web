import React, { useContext } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useOnboardingForm } from "../../context/FormContext";
import StepLayout from "../../layout/freelancer/StepLayout";
import Button from "../../components/buttons/Button";

const AddExperienceForm = () => {
  const { formData, setFormData, setActiveStepIndex, activeStepIndex } =
    useOnboardingForm();

  const initialValues = {
    experience: formData.experience || "",
  };

  const validationSchema = Yup.object({
    experience: Yup.string().required("Experience is required"),
  });

  const handleSubmit = (values: any) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      experience: values.experience,
    }));
    setActiveStepIndex(activeStepIndex + 1);

    // Do something with the form values
    console.log("Form values:", values);
  };

  return (
    <StepLayout
      title={"Add work your experiences."}
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
          <label htmlFor="experience">Add Experience:</label>
          <Field as="textarea" id="experience" name="experience" required />
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

export default AddExperienceForm;
