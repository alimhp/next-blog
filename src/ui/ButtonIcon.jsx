const btnType = {
  primary: " text-gray-700 hover:bg-gray-900 hover:text-white",
  secondary: "  text-blue-500 hover:bg-blue-500 hover:text-white ",
  outline:
    "border border-secondary-200 text-secondary-500 hover:bg-secondary-200",
  red: "  text-red-500 hover:bg-red-900 hover:text-white",
  danger: "border border-red-100 text-red-500",
};

function ButtonIcon({ children, onClick, className, variant, ...rest }) {
  return (
    <button
      onClick={onClick}
      className={`
      ${btnType[variant]}
      ${className} flex items-center justify-center gap-x-1 rounded-md !p-1
      [&>svg]:w-5  [&>svg]:h-5 [&>svg]:text-inherit
      text-xs lg:text-sm
      transition-all duration-300 ease-out"`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
