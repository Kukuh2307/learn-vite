import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormLogin from "../Components/Fragments/FormLogin";
import PropTypes from "prop-types";
const LoginPage = () => {
  return (
    <AuthLayouts
      title="Login"
      describe="Welcome back. Sign in to your account"
      type="login"
    >
      <FormLogin />
    </AuthLayouts>
  );
};
LoginPage.propTypes = {
  children: PropTypes.node,
};
export default LoginPage;
