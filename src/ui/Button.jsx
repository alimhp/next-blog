const Button = ({ children, onClick, classname, ...rest }) => {
  return (
    <button className={classname} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
