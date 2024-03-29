// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import Button from "./Components/Elements/Button";
function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center bggre">
      <div className="flex gap-x-3">
        <Button variant="bg-red-700">Logn</Button>
        <Button variant="bg-slate-700">Buy Now</Button>

        {/* contoh nilai tombol tanpa value */}
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
