import { useForm } from "react-hook-form";
import TextField from "../../../ui/TextField";

export const metadata = {
  title: "ثبت نام ",
};
function signup() {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <h1>ثبت نام </h1>
      <form action="">
        <TextField name="name" label="نام و نام خانوادی" isRequired />
      </form>
    </div>
  );
}

export default signup;
