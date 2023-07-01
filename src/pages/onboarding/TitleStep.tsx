import { Form, Formik } from "formik";
import InputField from "../../components/inputs/InputField";

import * as yup from "yup";
import { useOnboardingForm } from "../../context/FormContext";
import StepLayout from "../../layout/freelancer/StepLayout";
import Button from "../../components/buttons/Button";

const TitleStep = () => {
  const { activeStepIndex, formData, setActiveStepIndex, setFormData } =
    useOnboardingForm();
  const ValidationSchema = yup.object().shape({
    title: yup.string().required(),
  });
  return (
    <StepLayout
      subTitle={"lorem lorem lorem"}
      title={"First, add a title to tell the world what you do."}
    >
      <div>
        <Formik
          onSubmit={(values) => {
            console.log("valuasdes", values);
            setActiveStepIndex(activeStepIndex + 1);

            const data = { ...formData, ...values };
            setFormData(data);
          }}
          initialValues={{ title: "" }}
          validationSchema={ValidationSchema}
        >
          {(formik) => {
            return (
              <Form>
                <InputField
                  placeholder="Give title"
                  onChange={formik.handleChange("title")}
                  name="title"
                  id="title"
                  value={formik.values.title}
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
            );
          }}
        </Formik>
      </div>
    </StepLayout>
  );
};

export default TitleStep;

// const initialValues = {
//   username: "",
//   email: "",
//   password: "",
//   registration_date: "",
//   location: "",
//   overview: "",
//   skills: [],
//   language: "",
//   country: "",
//   title: "",
//   experience: "",
//   education: "",
//   description: "",
//   hourly_rate: 0,
//   address: "",
//   phone: "",
// };
