import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/services/app/mainApi";
import { Formik } from "formik";
import InputField from "../../components/inputs/InputField";
import { FiLock, FiMail } from "react-icons/fi";
import Button from "../../components/buttons/Button";
import { LoginUser } from "../../features/reducers/userReducer";

const Register = () => {
  const [Login] = useLoginMutation();
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div>
      <div className="flex justify-center items-center flex-col px-30 ">
        <Formik
          initialValues={{
            email: "john.doe3@example.com",
            password: "password123",
          }}
          onSubmit={async (data) => {
            const res = await Login(data);
            if (res?.data?.success) {
              dispatch(LoginUser(res?.data?.user));

              if (res?.data?.user?.user_account?.role === "freelancer") {
                nav("/fl/dashboard");
              } else if (res?.data?.user?.user_account?.role === "client") {
                nav("/fl/client");
              }
            }
            console.log("data", data);
          }}
        >
          {({ values, handleChange, errors, handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="bg-off-white shadow-2xl px-32 py-10">
                  <div>
                    <h1 className="text-3xl font-bold">
                      Complete your free account setup
                    </h1>
                    <div>
                      <span className="bg-violet-600 text-white px-4 py-2 rounded-full">
                        P
                      </span>
                      <span>prabhat@gmail.com</span>
                    </div>
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
    </div>
  );
};

export default Register;
