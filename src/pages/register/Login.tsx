import React from "react";
import InputField from "../../components/inputs/InputField";
import Button from "../../components/buttons/Button";
import { FiKey, FiLock, FiMail } from "react-icons/fi";
import { useLoginMutation } from "../../features/services/app/mainApi";
import { Formik } from "formik";

const Login = () => {
  const [Login] = useLoginMutation();

  return (
    <div className="flex justify-center items-center flex-col px-30 ">
      <Formik
        initialValues={{
          email: "john.doe@example.com",
          password: "password123",
        }}
        onSubmit={(data) => {
          Login(data).then((res) => {
            console.log("res", res);
          });
          console.log("data", data);
        }}
      >
        {({ values, handleChange, errors, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="bg-off-white shadow-2xl px-32 py-10">
                <div>
                  <h1 className="text-3xl font-bold">Log in to your account</h1>
                </div>
                <div className="flex gap-3 flex-col">
                  <InputField
                    label="Email"
                    error="this is error"
                    type="email"
                    placeholder="email"
                    onChange={handleChange("email")}
                    value={values.email}
                    icon={
                      <>
                        <FiMail className="text-gray-500 mr-2" />
                      </>
                    }
                  />
                  <InputField
                    label="Email"
                    error="this is error"
                    type="password"
                    placeholder="password"
                    onChange={handleChange("password")}
                    value={values.password}
                    icon={<FiLock />}
                  />
                  <div>
                    <Button type="submit">Login</Button>
                  </div>
                  <div>
                    Don’t have account?{" "}
                    <span className="text-orange">Sign up</span>
                  </div>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
