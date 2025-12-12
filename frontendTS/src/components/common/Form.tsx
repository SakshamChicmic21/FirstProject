import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setSignupData } from "../../slices/authSlice";

interface FormData {
  firstName: string;
  lastName: string;  email: string;
  address: string;
  category: string;
  aboutYou: string;
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fromdata, setFromData] = useState("");

  const onFormSubmit = (data: FormData) => {
    // console.log(data);
    const jsonData = JSON.stringify(data);
    setFromData(jsonData);
    dispatch(setSignupData(data));
    localStorage.setItem("UserData", jsonData);
    toast.success("signup successfully");
    navigate('/');
  };
  

  

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-100 p-6 rounded-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">React hook form</h1>
      <form
        className="flex flex-col gap-2 w-full max-w-md bg-white p-8 rounded-lg shadow-md"
        onSubmit={handleSubmit(onFormSubmit)}
      >

        <Input
          {...register("firstName", {
            validate: (value: string) => value !== "admin" || "Nice try!",
          })}
          placeholder="First Name"
        />
        {errors.firstName && (
          <span className="text-red-500 text-sm">{errors.firstName.message}</span>
        )}
        <Input {...register("lastName")} placeholder="Last Name" />
        <Input
          {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="Email"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
        <Input {...register("address")} placeholder="Address" />

        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white text-gray-700"
          {...register("category", { required: true })}
        >
          <option value="">select...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
        <textarea
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-y min-h-[100px]"
          {...register("aboutYou")}
          placeholder="About You"
        />
        <Button bgColor="bg-green-400" type="submit">
          Submit
        </Button>
      </form>
      {fromdata && (
        <div className="mt-6 p-4 bg-gray-200 rounded-md w-full max-w-md">
          <h3 className="font-semibold text-gray-700 mb-2">Form Data:</h3>
          <pre className="text-sm text-gray-600 whitespace-pre-wrap break-words">{fromdata}</pre>
        </div>
      )}
    </div>
  );
}

export default Form;
