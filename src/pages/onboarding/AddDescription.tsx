import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import StepLayout from "../../layout/freelancer/StepLayout";
import { useOnboardingForm } from "../../context/FormContext";
import Button from '@/components/buttons/Button';

const AddDescription = () => {
  const { formData, setFormData, activeStepIndex, setActiveStepIndex } =
    useOnboardingForm();

  const initialValues = {
    description: formData.description || "",
  };

  const validationSchema = Yup.object({
    description: Yup.string().required("Description is required"),
  });

  const handleSubmit = (values: any) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      description: values.description,
    }));
    setActiveStepIndex(activeStepIndex + 1);
    // Do something with the form values
    console.log("Form values:", values);
  };

  return (
    <StepLayout
      title={"Add a Description"}
      subTitle={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
      }
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="description">Description:</label>
          <Field as="textarea" id="description" name="description" required />

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

export default AddDescription;
