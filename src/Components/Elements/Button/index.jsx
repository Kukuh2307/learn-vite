const Button = (props) => {
  // memberikan nilai default value
  const { children = "Kosong", variant = "bg-black" } = props;

  return (
    <button
      className={`py-2 px-4 font-semibold rounded-lg shadow-md text-white ${variant}`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
