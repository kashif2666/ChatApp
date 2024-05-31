import React from "react";
import Input from "../../components/Input";

const Form = () => {
  return (
    <div className="bg-white w-[420px] h-[500px] flex flex-col items-center justify-center shadow-lg rounded-lg">
      <div className="text-4xl font-bold">Welcome</div>
      <div className="text-xl font-light mb-10">Sign up now to get started</div>
      <Input
        label="Full Name"
        name="name"
        placeholder="Enter your full name"
        className="mb-2"
      />
      <Input
        label="Email Address"
        name="email"
        placeholder="Enter your email"
        className="mb-2"
      />
      <Input
        label="Password"
        name="password"
        placeholder="Enter your Password"
        className="mb-2"
      />
    </div>
  );
};

export default Form;
