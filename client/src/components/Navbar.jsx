import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className="w-full bg-slate-100">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-5">
        <div>
          <h1
            onClick={() => navigate("/")}
            className="font-bold text-orange-500 text-3xl cursor-pointer"
          >
            My Blog
          </h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <p
            onClick={() => navigate("/login")}
            className="font-semibold text-slate-700 cursor-pointer border-b-2 border-transparent hover:border-orange-400 transition ease-in-out duration-75"
          >
            Login{" "}
          </p>
          <p
            onClick={() => navigate("/register")}
            className="font-semibold text-slate-700 cursor-pointer border-b-2 border-transparent hover:border-orange-400 transition ease-in-out duration-75"
          >
            Register
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
