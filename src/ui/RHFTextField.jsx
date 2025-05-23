export default function RHFTextField({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  isRequired,
  errors,
  validationSchema = {},
  ...rest
}) {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);

  return (
    <div className={`w-full !mb-4 ${hasError ? "text-red-500" : ""}`}>
      {/* Label */}
      <label
        htmlFor={name}
        className={`block !mb-1 text-sm font-medium ${
          hasError ? "text-red-600" : "text-gray-700"
        }`}
      >
        {label}
        {isRequired && <span className="text-red-700">*</span>}
      </label>

      {/* Input Field */}
      <input
        autoComplete="off"
        type={type}
        id={name}
        dir={dir}
        className={`
          w-full !px-3 !py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50
          ${dir === "ltr" ? "text-left" : "text-right"}
          ${
            hasError
              ? "border-red-500 focus:ring-red-500 bg-red-50"
              : "border-gray-300 focus:ring-primary-500 focus:border-primary-500"
          }
        `}
        {...register(name, validationSchema)}
        {...rest}
      />

      {/* Error Message */}
      {hasError && (
        <p className="mt-1 text-xs text-red-600">{errorMessages?.message}</p>
      )}
    </div>
  );
}
