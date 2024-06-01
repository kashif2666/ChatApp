import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Form = ({ isSignInPage }) => {
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: "",
    }),
    email: "",
    password: "",
  });
  console.log("data=>", data);
  const navigate = useNavigate();
  return (
    <div className="bg-light h-screen justify-center items-center flex">
      <div className="bg-white w-[420px] h-[500px] flex flex-col items-center justify-center shadow-lg rounded-lg">
        <div className="text-4xl font-bold">
          Welcome {isSignInPage && "Back"}{" "}
        </div>
        <div className="text-xl font-light mb-10">
          {isSignInPage
            ? "Sign in to get explored"
            : "Sign up now to get started"}
        </div>
        <form
          className="flex flex-col items-center justify-center w-full"
          onSubmit={() => console.log("submitted")}
        >
          {!isSignInPage && (
            <Input
              label="Full Name"
              name="name"
              placeholder="Enter your full name"
              className="mb-2 w-[70%]"
              value={data.fullName}
              onChange={(e) => setData({ ...data, fullName: e.target.value })}
            />
          )}
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="mb-2 w-[70%]"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            label="Password"
            name="password"
            placeholder="Enter your Password"
            className="mb-6 w-[70%]"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Button
            label={isSignInPage ? "Sign in" : "Sign up"}
            className="w-1/2 mb-3"
            type="submit"
          />
        </form>
        <div>
          {isSignInPage
            ? "Didn't have an account?"
            : "Already have an account?"}
          <span
            className="text-primary cursor-pointer underline"
            onClick={() =>
              navigate(`/users/${isSignInPage ? "sign_up" : "sign_in"}`)
            }
          >
            {isSignInPage ? "Sign up" : "Sign in"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
