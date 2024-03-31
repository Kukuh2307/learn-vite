import PropTypes from "prop-types";

const Button = (props) => {
  // memberikan nilai default value
  const {
    children = "Kosong",
    variant = "bg-black",
    onClick = () => {},
    type = "button",
  } = props;

  return (
    <button
      className={`py-2 px-4 font-semibold rounded-lg shadow-md hover:bg-blue-500 text-white ${variant}`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node, // properti children harus berupa elemen React atau node
  variant: PropTypes.string, // properti variant harus berupa string\
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
