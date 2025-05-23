"use client";
import { useForm } from "react-hook-form";
import RHFTextField from "../../../ui/RHFTextField";
import Button from "../../../ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signupApi } from "../../../services/authServices";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const onSubmit = async (values) => {
    try {
      const { user, message } = await signupApi(values);
      //   console.log(user, message);
      toast.success(message);
    } catch (error) {
      //   console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div>
      <h1 className="mb-10  text-center ">ثبت نام </h1>
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
    h-12 /* Fixed height */
    rounded-sm 
    bg-blue-500 
    text-white 
    font-medium /* Better than bold for buttons */
    hover:bg-blue-600 /* Darker on hover */
    focus:bg-blue-500 
    focus:ring-2 
    focus:ring-blue-300 
    focus:ring-opacity-50 
    shadow-md /* Medium shadow */
    hover:shadow-lg /* Larger shadow on hover */
    active:shadow-sm /* Smaller shadow when clicked */
    transition-all /* Smooth transitions for all properties */
    duration-200
  "
        >
          تایید
        </Button>
      </form>
    </div>
  );
}

export default signup;
