import InputForm from "../Elements/Inputs";
import Button from "../Elements/Button";
const FormLogin = () => {
  return (
    <form action="">
      {/* email */}
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="Masukkan email anda"
      />
      {/* password */}
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Masukkan password anda"
      />
      {/* tombol */}
      <Button variant="bg-blue-600">Login</Button>
    </form>
  );
};
export default FormLogin;
