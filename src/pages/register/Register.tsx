import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useOnboardingForm } from "@/context/FormContext";
import InputField from "@/components/inputs/InputField";

function MainForm() {
  const { formData, setFormData } = useOnboardingForm();
  const nav = useNavigate();
  const handleSubmit = (values) => {
    console.log("values", values);

    if (values.role === "freelancer") {
      // <Navigate to={"/onboarding"} />;
      setFormData({
        ...formData,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        role: values.role,
        password: values.password,
      });
      nav("/onboarding");
    } else {
      // Handle client form submission
      // ...
    }
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleChange, values, errors }) => {
        return (
          <Form>
            <div>
              <h1>Register</h1>
            </div>
            {/* <label htmlFor="firstName">First Name:</label>
        <Field type="text" id="firstName" name="firstName" required />

        <label htmlFor="lastName">Last Name:</label>
        <Field type="text" id="lastName" name="lastName" required /> */}
            <div>
              <InputField
                id="firstName"
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
                label="First Name"
                error={errors?.firstName}
              />
            </div>
            <div>
              <InputField
                id="lastName"
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
                label="Last Name"
                error={errors?.lastName}
              />
            </div>
            <div>
              <InputField
                id="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                label="email"
                error={errors?.email}
              />
            </div>
            <div>
              <InputField
                id="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                label="password"
                error={errors?.password}
              />
            </div>
            <div>
              <label>
                <Field type="radio" name="role" value="freelancer" required />
                Freelancer
              </label>

              <label>
                <Field type="radio" name="role" value="client" required />
                Client
              </label>
            </div>

            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default MainForm;
