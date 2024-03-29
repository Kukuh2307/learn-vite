import PropTypes from "prop-types";
const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center min-h-screen items-center bggre">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome back. Sign in to your account
        </p>
        {children}
      </div>
    </div>
  );
};
AuthLayouts.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};
export default AuthLayouts;
