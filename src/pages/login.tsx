import Login from "../components/user/login";
import React from "react";
import "../styles/globals.css";

const LoginPage = () => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#004d66] via-[#008080] to-[#00b3b3] flex items-center justify-center p-4">
      <Login />
    </main>
  );
};

export default LoginPage;
