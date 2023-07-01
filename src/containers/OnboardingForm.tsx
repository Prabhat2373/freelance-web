import React from "react";
import Step from "../pages/onboarding/Step";
import Stepper from "../pages/onboarding/Stepper";

const OnboardingForm = () => {
  return (
    <div>
      <Stepper />
      <div className="flex justify-center items-center">
        <div className="w-2/3">
          <Step />
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;
