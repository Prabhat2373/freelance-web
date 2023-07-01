import React from "react";
import OnboardingForm from "../../containers/OnboardingForm";
import { useOnboardingForm } from "../../context/FormContext";

const Onboarding = () => {
  const { formData } = useOnboardingForm();
  console.log("formData", formData);

  return (
    <div>
      <h1>This is Onboarding</h1>
      <OnboardingForm />
    </div>
  );
};

export default Onboarding;
