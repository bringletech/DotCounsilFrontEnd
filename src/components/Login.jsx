import React, { useContext, useState } from "react";
// import axios from "axios";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  let navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit =async (e) => {
    e.preventDefault();
    
    try{
      let resp= await axiosInstance.post('/api/v1/superAdmin/loginAdmin',{email,password})
      if(resp.data.success){
        alert(resp.data.message);
        let token=resp.data.data.accessToken;
        localStorage.setItem("accessToken",token);
        login(resp.data.data.admin);
        console.log("vite url:",import.meta.env.VITE_API_URL);
        console.log(token);
        navigate("/dashboard", { replace: true });

      }
    }catch(err){
      alert("login failed! error:",err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-500 text-center">
          &copy; Dot counsil
        </p>
      </div>
    </div>
  );
};

export default Login;
