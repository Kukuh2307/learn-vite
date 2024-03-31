import InputForm from "../Elements/Inputs";
import Button from "../Elements/Button";
const FormLogin = () => {
  // membuat variable handle untuk di kirim ke child button
  const handleLogin = (event) => {
    event.preventDefault();
    // console.log(event.target.email.value);
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/product";
    // console.log("berhasil klik tombol melalui fungsi onClick");
  };
  return (
    // mengganti event form menjadi on submit
    <form onSubmit={handleLogin}>
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
      {/* mengirim type button menjadi submit untuk dilakkukan handleLogin */}
      <Button variant="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};
export default FormLogin;
