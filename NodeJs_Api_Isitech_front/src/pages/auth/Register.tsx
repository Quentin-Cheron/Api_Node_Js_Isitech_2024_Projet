import FormInput from "@/components/parts/FormInput";
import Navigation from "@/components/parts/Navigation";
import { Button } from "@/components/ui/button";
import React from "react";

import { useForm } from "react-hook-form";

// Service

import userService from "@/services/user.service.js";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: object) => {
    userService.signup(data);
    console.log(data);
  };
  return (
    <div className="grid grid-cols-[300px,1fr]">
      <Navigation />
      <main className="mr-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-5">
            <FormInput
              register={register}
              errors={errors}
              label="name"
              content="Firstname"
              validation={{
                required: {
                  value: true,
                  message: "Firstname is required",
                },
              }}
            />
            <FormInput
              register={register}
              errors={errors}
              label="phoneNumber"
              content="Phone number"
              validation={{
                required: {
                  value: true,
                  message: "Phone Number is required",
                },
              }}
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <FormInput
              register={register}
              errors={errors}
              label="password"
              content="Password"
              validation={{
                required: {
                  value: true,
                  message: "Password is required",
                },
              }}
            />
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
          </div>
          <Button className="mt-3" variant="outline" type="submit">
            Submit
          </Button>
        </form>
      </main>
    </div>
  );
};

export default Register;
