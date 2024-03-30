import InputForm from "../Elements/Inputs";
import Button from "../Elements/Button";
const FormRegister = () => {
  return (
    <form action="">
      {/* username */}
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="Masukkan username anda"
      />
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
      {/* konfirmasi password */}
      <InputForm
        label="Konfirmasi Password"
        name="konfirmasiPassword"
        type="password"
        placeholder="Masukkan konfirmasi password anda"
      />
      {/* tombol */}
      <Button variant="bg-blue-600 w-full">Register</Button>
    </form>
  );
};
export default FormRegister;
