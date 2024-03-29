import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const AuthLayouts = (props) => {
  const { children, title, describe, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">{describe}</p>
        {children}

        {/* menambahkan kondisi untuk bagian register maupun login dengan operator
        <p className="text-slate-500 mt-2">
          {type === "login" ? "Belum mempunyai akun" : "Sudah mempunyai akun"}

          {type === "login" && (
            <Link to="/regist" className="text-blue-600 ml-1 fon">
              <i>Daftar</i>
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="text-blue-600 ml-1 fon">
              <i>Login</i>
            </Link>
          )}
        </p> */}

        <Navigation type={type} />
      </div>
    </div>
  );
};

// menggunakan component terpisah
const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-slate-500 mt-2 text-center text-sm">
        Belum mempunyai akun??
        <Link to="/regist" className="text-blue-600 ml-1 fon">
          <i>Daftar</i>
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-slate-500 mt-2 text-center text-sm">
        Sudah mempunyai akun??
        <Link to="/login" className="text-blue-600 ml-1 fon">
          <i>Login</i>
        </Link>
      </p>
    );
  }
};
AuthLayouts.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  describe: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
Navigation.propTypes = {
  type: PropTypes.string.isRequired,
};
export default AuthLayouts;

// NOTE : AuthLayouts.jsx digunakan pada halaman Login dan Register
// - untuk membuat condition rendering bisa menggunakan operator ternary maupun membuat component baru terpisah
