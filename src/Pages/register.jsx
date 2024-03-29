import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormRegister from "../Components/Fragments/FormRegister";
import PropTypes from "prop-types";
const RegisterPage = () => {
  return (
    <AuthLayouts
      title="Register"
      describe="Create your account to get all features"
      type="register"
    >
      <FormRegister />
    </AuthLayouts>
  );
};
RegisterPage.PropTypes = {
  children: PropTypes.node,
};
export default RegisterPage;
