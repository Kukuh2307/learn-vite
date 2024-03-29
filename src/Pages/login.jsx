import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormLogin from "../Components/Fragments/FormLogin";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <AuthLayouts title="Login" describe="Welcome back. Sign in to your account">
      <FormLogin />
      <p className="text-slate-500 mt-2">
        Belum mempunyai akun?
        <Link to="/regist" className="text-blue-600 ml-1 fon">
          <i>Daftar</i>
        </Link>
      </p>
    </AuthLayouts>
  );
};
LoginPage.PropTypes = {
  children: PropTypes.node,
};
export default LoginPage;
