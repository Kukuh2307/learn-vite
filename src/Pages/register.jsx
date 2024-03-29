import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormRegister from "../Components/Fragments/FormRegister";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <AuthLayouts
      title="Register"
      describe="Create your account to get all features"
    >
      <FormRegister />
      <p className="text-slate-500 mt-2">
        Sudah mempunyai akun?
        <Link to="/login" className="text-blue-600 ml-1 fon">
          <i>Login</i>
        </Link>
      </p>
    </AuthLayouts>
  );
};
RegisterPage.PropTypes = {
  children: PropTypes.node,
};
export default RegisterPage;
