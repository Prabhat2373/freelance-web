import React from "react";
import InputField from "../../components/inputs/InputField";
import Button from "../../components/buttons/Button";
import { FiKey, FiLock, FiMail } from "react-icons/fi";

const Login = () => {
  return (
    <div className="flex justify-center items-center flex-col px-30 ">
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
            icon={<FiLock />}
          />
          <div>
            <Button>Login</Button>
          </div>
          <div>
          Don’t have account? <span className='text-orange'>Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
