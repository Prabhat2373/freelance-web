import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import EnterEmailForm from "../pages/onboarding/EnterEmail";
import SelectLanguageForm from "../pages/onboarding/SelectLanguage";
import EnterEducationDetailsForm from "../pages/onboarding/EnterEducation";
import AddExperienceForm from "../pages/onboarding/AddExperience";
import { Formik, Form } from "formik";
import TitleStep from "../pages/onboarding/TItleStep";
import * as Yup from "yup";

const OnboardingForm = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("");
  const [educationDetails, setEducationDetails] = useState("");
  const [experience, setExperience] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleFormSubmit = () => {
    // Perform necessary actions with the form data
    // For example, make API requests to save the data
    // Set the submitted flag to true
    setSubmitted(true);
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    registration_date: Yup.date().required("Registration date is required"),
    location: Yup.string().required("Location is required"),
    overview: Yup.string().required("Overview is required"),
    skills: Yup.array().required("Skills are required"),
    language: Yup.string().required("Language is required"),
    country: Yup.string().required("Country is required"),
    title: Yup.string().required("Title is required"),
    experience: Yup.string().required("Experience is required"),
    education: Yup.string().required("Education is required"),
    description: Yup.string().required("Description is required"),
    hourly_rate: Yup.number()
      .typeError("Hourly rate must be a number")
      .required("Hourly rate is required"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string().required("Phone is required"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
    registration_date: "",
    location: "",
    overview: "",
    skills: [],
    language: "",
    country: "",
    title: "",
    experience: "",
    education: "",
    description: "",
    hourly_rate: 0,
    address: "",
    phone: "",
  };

  const onboardingSteps = [
    {
      step: 1,
      url: "/title",
      component: TitleStep,
      title: "First, add a title to tell the world what you do.",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.",
    },
    {
      step: 2,
      url: "/experience",
      component: SelectLanguageForm,
      title: "Add work your experiences.",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.",
    },
    {
      step: 3,
      url: "/education",
      component: EnterEducationDetailsForm,
      title: "Let us know about your education.",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.",
    },
    {
      step: 4,
      url: "/language",
      component: EnterEducationDetailsForm,
      title: "Add languages.",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.",
    },
    {
      step: 5,
      url: "/skills",
      component: EnterEducationDetailsForm,
      title: "Add your skills.",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.",
    },
    {
      step: 6,
      url: "/desctiption",
      component: EnterEducationDetailsForm,
      title: "Add Profile Descrption.",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.",
    },
    {
      step: 7,
      url: "/hourly-rate",
      component: EnterEducationDetailsForm,
      title: "Add Hourly Rate",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.",
    },
    {
      step: 7,
      url: "/hourly-rate",
      component: EnterEducationDetailsForm,
      title: "Add contact information.",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.",
    },

    {
      step: 4,
      url: "/step4",
      component: AddExperienceForm,
    },
  ];

  const renderFormStep = (formik) => {
    const currentStep = onboardingSteps.find((s) => s.step === step);
    const StepComponent = currentStep?.component;

    return StepComponent ? <StepComponent /> : null;
  };
  if (submitted) {
    return <Navigate to="/dashboard" />;
  }
  console.log("length", onboardingSteps.length);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(data) => console.log("data", data)}
      >
        {(formik) => {
          console.log(formik.values);
          return (
            <Form>
              {renderFormStep(formik)}

              <div>
                {step > 1 && <button onClick={handlePrevStep}>Back</button>}
                {step < onboardingSteps.length ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    disabled={!formik.isValid}
                  >
                    Next
                  </button>
                ) : (
                  <button type="button" disabled={!formik.isValid}>
                    Submit
                  </button>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default OnboardingForm;
