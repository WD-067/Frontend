const Button = ({ children, className, onClick }) => {
  const baseClasses = "btn mt-2 w-full"; // Shared classes can be defined here
  const combinedClasses = `${baseClasses} ${className || ""}`.trim();

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
