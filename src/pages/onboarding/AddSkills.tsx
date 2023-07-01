import React, { useContext } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useOnboardingForm } from "../../context/FormContext";
import StepLayout from "../../layout/freelancer/StepLayout";
import Button from "@/components/buttons/Button";

const AddSkills = () => {
  const { formData, setFormData, activeStepIndex, setActiveStepIndex } =
    useOnboardingForm();

  const initialValues = {
    skills: formData.skills || [],
  };

  const validationSchema = Yup.object({
    skills: Yup.array().min(1, "At least one skill is required"),
  });

  const handleSubmit = (values: any) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      skills: values.skills,
    }));
    setActiveStepIndex(activeStepIndex + 1);
    // Do something with the form values
    console.log("Form values:", values);
  };

  // Random skills for demonstration purposes
  const skillsOptions = [
    { value: "649c676f3059edf05e57ad06", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "React", label: "React" },
    { value: "Node.js", label: "Node.js" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "C#", label: "C#" },
    { value: "PHP", label: "PHP" },
  ];

  return (
    <StepLayout
      title={"Add your skills."}
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
          <label htmlFor="skills">Select Skills:</label>
          <Field as="select" id="skills" name="skills" multiple required>
            {skillsOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
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

export default AddSkills;
