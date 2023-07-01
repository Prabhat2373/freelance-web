import React, { useEffect } from "react";
import { useOnboardingForm } from "../../context/FormContext";
import AddContactInfo from "./AddContactInfo";
import AddDescription from "./AddDescription";
import AddExperienceForm from "./AddExperience";
import AddHourlyRate from "./AddHourlyRate";
import AddSkills from "./AddSkills";
import EnterEducationDetailsForm from "./EnterEducation";
import SelectLanguageForm from "./SelectLanguage";
import TitleStep from "./TitleStep";

function Step() {
  const { activeStepIndex, setActiveStepIndex } = useOnboardingForm();

  // useEffect(() => {
  //   setActiveStepIndex(7);
  // }, []);

  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <TitleStep />;
      break;
    case 1:
      stepContent = <AddExperienceForm />;
      break;
    case 2:
      stepContent = <EnterEducationDetailsForm />;
      break;
    case 3:
      stepContent = <SelectLanguageForm />;
      break;
    case 4:
      stepContent = <AddSkills />;
      break;
    case 5:
      stepContent = <AddDescription />;
      break;
    case 6:
      stepContent = <AddHourlyRate />;
      break;
    case 7:
      stepContent = <AddContactInfo />;
      break;
    default:
      break;
  }

  return stepContent;
}

export default Step;
