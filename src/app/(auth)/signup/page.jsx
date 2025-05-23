"use client";
import { useForm } from "react-hook-form";
import RHFTextField from "../../../ui/RHFTextField";
import Button from "../../../ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signupApi } from "../../../services/authServices";
import toast from "react-hot-toast";
import Link from "next/link";
import { useAuth } from "../../../context/AuthContext";

const schema = yup
  .object({
    name: yup
      .string()
      .min(5, "حداقل 5 کارکتر")
      .max(30)
      .required("وارد کردن نام و نام خانوادگی الزامی است "),
    email: yup
      .string()
      .email("ایمیل نا معتبر است")
      .required(" وارد کردن ایمیل الزامی است"),
    password: yup.string().min(8).required("وارد کردن پسورد الزامی است"),
  })
  .required();

function signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const { signup } = useAuth();

  const onSubmit = async (values) => {
    await signup(values);
  };

  return (
    <div>
      <h1 className="!mb-10  text-center font-bold ">ثبت نام </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="!space-y-10">
        <RHFTextField
          label="نام و نام خانوادکی"
          name="name"
          register={register}
          isRequired
          errors={errors}
        />
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          dir="ltr"
          errors={errors}
          isRequired
        />
        <RHFTextField
          label="رمز عبور"
          name="password"
          register={register}
          dir="ltr"
          errors={errors}
          type="password"
          isRequired
        />
        <Button
          type="submite"
          variant="primary"
          className="
          w-full 
          h-12 
          rounded-sm 
          bg-blue-500 
          text-white 
          font-medium 
          focus:bg-blue-500 
          focus:ring-2 
          focus:ring-blue-300 
          focus:ring-opacity-50 
          shadow-md 
          hover:shadow-lg 
          active:shadow-sm
          transition-all
          duration-200
          "
        >
          تایید
        </Button>
        <Link href="/signin" className="hover:text-blue-600">
          قبلا ثبت نام کرده ام
        </Link>
      </form>
    </div>
  );
}

export default signup;
