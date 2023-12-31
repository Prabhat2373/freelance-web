import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useOnboardingForm } from "../../context/FormContext";
import StepLayout from "../../layout/freelancer/StepLayout";
import Button from "@/components/buttons/Button";

const EnterEducationDetailsForm = () => {
  const { formData, setFormData, activeStepIndex, setActiveStepIndex } =
    useOnboardingForm();

  const initialValues = {
    educationDetails: formData.educationDetails || "",
  };

  const validationSchema = Yup.object({
    educationDetails: Yup.string().required("Education details are required"),
  });

  const handleSubmit = (values: any) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      educationDetails: values.educationDetails,
    }));
    setActiveStepIndex(activeStepIndex + 1);
    // Do something with the form values
    console.log("Form values:", values);
  };

  return (
    <StepLayout
      title={"Let us know about your education."}
      subTitle={"Example : Bachelor's in Computer Science"}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="educationDetails">Enter Education Details:</label>
          <Field
            as="textarea"
            id="educationDetails"
            name="educationDetails"
            required
          />
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

export default EnterEducationDetailsForm;
