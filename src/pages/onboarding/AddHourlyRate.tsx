import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import StepLayout from "../../layout/freelancer/StepLayout";
import { useOnboardingForm } from "../../context/FormContext";
import Button from '@/components/buttons/Button';

const AddHourlyRate: React.FC = () => {
  const { formData, setFormData, activeStepIndex, setActiveStepIndex } =
    useOnboardingForm();

  const initialValues = {
    hourlyRate: formData.hourlyRate || "",
  };

  const validationSchema = Yup.object({
    hourlyRate: Yup.number()
      .typeError("Hourly rate must be a number")
      .required("Hourly rate is required")
      .positive("Hourly rate must be a positive number"),
  });

  const handleSubmit = (values: any) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      hourlyRate: values.hourlyRate,
    }));
    setActiveStepIndex(activeStepIndex + 1);
    // Do something with the form values
    console.log("Form values:", values);
  };

  return (
    <StepLayout
      title={"Add Hourly Rate"}
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
          <label htmlFor="hourlyRate">Hourly Rate:</label>
          <Field type="number" id="hourlyRate" name="hourlyRate" required />

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

export default AddHourlyRate;
