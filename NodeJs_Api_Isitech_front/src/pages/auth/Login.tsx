import FormInput from "@/components/parts/FormInput";
import Navigation from "@/components/parts/Navigation";
import { Button } from "@/components/ui/button";
import React from "react";

import { useForm } from "react-hook-form";

// Service

import userService from "@/services/user.service.js";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: object) => {
    userService.signin(data);
    console.log(data);
  };
  return (
    <div className="grid grid-cols-[300px,1fr]">
      <Navigation />
      <main className="mr-10 mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 m-auto">
          <FormInput
            register={register}
            errors={errors}
            label="email"
            content="Email"
            validation={{
              required: {
                value: true,
                message: "Email is required",
              },
            }}
          />
          <FormInput
            register={register}
            errors={errors}
            label="password"
            content="Password"
            type="password"
            validation={{
              required: {
                value: true,
                message: "Password is required",
              },
              // Password must contain at least 8 characters, including letters and numbers and special characters
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  "Password must contain at least 8 characters, including letters and numbers and special characters",
              },
            }}
          />
          <Button className="mt-3" variant="outline" type="submit">
            Submit
          </Button>
        </form>
      </main>
    </div>
  );
};

export default Login;
