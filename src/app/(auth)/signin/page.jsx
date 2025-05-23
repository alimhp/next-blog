"use client";
import { useForm } from "react-hook-form";
import RHFTextField from "../../../ui/RHFTextField";
import Button from "../../../ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { useAuth } from "../../../context/AuthContext";

const schema = yup
  .object({
    email: yup
      .string()
      .email("ایمیل نا معتبر است")
      .required(" وارد کردن ایمیل الزامی است"),
    password: yup.string().required("وارد کردن پسورد الزامی است"),
  })
  .required();

function page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signin } = useAuth();

  const onSubmit = async (values) => {
    await signin(values);
  };

  return (
    <div>
      <h1 className="!mb-10  text-center ">ورود به اکانت </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          hover:bg-blue-600 
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
          ورود
        </Button>
        <Link href="/signup" className="!mt-12 hover:text-blue-700">
          هنوز ثبت نام نکرد
        </Link>
      </form>{" "}
    </div>
  );
}

export default page;
