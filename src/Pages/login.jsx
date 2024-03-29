import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormLogin from "../Components/Fragments/FormLogin";
import PropTypes from "prop-types";
const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
    </AuthLayouts>
  );
};
LoginPage.PropTypes = {
  children: PropTypes.node,
};
export default LoginPage;
