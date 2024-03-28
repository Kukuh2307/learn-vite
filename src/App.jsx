// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

const Button = (props) => {
  const { children = "Kosong", variant = "bg-black" } = props;
  return (
    <button
      className={`py-2 px-4 font-semibold rounded-lg shadow-md text-white ${variant}`}
      type="submit"
    >
      {children}
    </button>
  );
};
function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center bggre">
      <Button variant="bg-red-700">Logn</Button>
      <Button variant="bg-slate-700">Buy Now</Button>
      <Button></Button>
    </div>
  );
}

export default App;
