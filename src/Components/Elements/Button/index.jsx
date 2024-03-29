import PropTypes from "prop-types";

const Button = (props) => {
  // memberikan nilai default value
  const { children = "Kosong", variant = "bg-black" } = props;

  return (
    <button
      className={`py-2 px-4 font-semibold rounded-lg shadow-md w-full hover:bg-blue-500 text-white ${variant}`}
      type="submit"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node, // properti children harus berupa elemen React atau node
  variant: PropTypes.string, // properti variant harus berupa string
};

export default Button;
