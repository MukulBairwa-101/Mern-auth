import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { iconset, constants } from "../../data/data";
import useHelper from "../../helper/useHelper";

import axios from "axios";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { FcGoogle, SlLockOpen, HiLockClosed, HiLockOpen } = iconset;
  const { emailPattern, passwordPattern, formErrors } = constants;

  const [passwordLock, setPasswordLock] = useState(true);

  const { request, response } = useHelper();

  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    request("POST", "/auth/signup", data);
  };

  useEffect(() => {
    if (response) {

      setTimeout(() => {
        navigate("/auth/sign");
      }, 5000);
    }
  }, [response]);


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Your Logo</h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <form className="px-5 py-7" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="mb-5">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Username
              </label>
              <input
                type="text"
                aria-invalid={errors.name ? "true" : "false"}
                className="border rounded-lg px-3 py-2 mt-1  text-sm w-full"
                {...register("username", {
                  required: true,
                  minLength: 3,
                })}
              />
              {errors.username?.type === "required" && (
                <p className="text-sm py-2 my-2 text-rose-500">
                  {formErrors.nameError.required}
                </p>
              )}
              {errors.username?.type === "minLength" && (
                <p className="text-sm py-2 my-2 text-rose-500">
                  {formErrors.nameError.minLength}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                E-mail
              </label>
              <input
                type="email"
                aria-invalid={errors.email ? "true" : "false"}
                className="border rounded-lg px-3 py-2 mt-1  text-sm w-full"
                {...register("email", {
                  required: true,
                  pattern: emailPattern,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="text-sm py-2 my-2 text-rose-500">
                  {formErrors.emailError.required}
                </p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-sm py-2 my-2 text-rose-500">
                  {formErrors.emailError.pattern}
                </p>
              )}
            </div>
            <div className="mb-5 relative">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Password
              </label>
              {passwordLock ? (
                <HiLockClosed
                  className="absolute right-2 top-10 cursor-pointer"
                  onClick={() => setPasswordLock(false)}
                />
              ) : (
                <HiLockOpen
                  className="absolute right-2 top-10 cursor-pointer"
                  onClick={() => setPasswordLock(true)}
                />
              )}
              <input
                type={passwordLock ? "password" : "text"}
                aria-invalid={errors.password ? "true" : "false"}
                className="border rounded-lg px-3 py-2 mt-1  text-sm w-full"
                {...register("password", {
                  required: true,
                  pattern: passwordPattern,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-sm py-2 my-2 text-rose-500">
                  {formErrors.passwordError.required}
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-sm py-2 my-2 text-rose-500">
                  {formErrors.passwordError.pattern}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block mr-2">Signup</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
          {/* <div className="p-5">
            <div className="grid  gap-1">
              <button
                type="button"
                className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block  flex items-center justify-around"
              >
                <FcGoogle className="sm:text-3xl  text-xl" />
                Continue with google
              </button>
            </div>
          </div> */}
          {/* <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset  flex items-center justify-around ">
                  <SlLockOpen className="sm:text-lg  text-md" />
                  <span className="inline-block ml-1">Forgot Password</span>
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
