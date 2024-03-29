import PropTypes from "prop-types";

const Input = (props) => {
  const { type, placeholder, name } = props;

  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
      id="email"
      placeholder={placeholder}
      name={name}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Input;
