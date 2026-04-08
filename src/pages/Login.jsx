import { useState } from "react";
import {  useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, Password);

    //    const data =  FormData(e)
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username:username,
          password:Password,
          expiresInMins: 30, // optional, defaults to 60
        }),
        // credentials: "include", // Include cookies (e.g., accessToken) in the request
      });
      const data = await res.json();
      console.log(data);
      
      if (res.ok) {
        localStorage.setItem("token", data.token);
        console.log("Login Success");
        toast.success("Login Successfull!", {
      style: { fontSize: "20px", fontWeight: "bold" },
    });
        navigate('/dashboard')
      } else {
        toast.error("Invalid credentials ", {
      style: { fontSize: "20px", fontWeight: "bold" },
    });
        console.log("Error:", data.message);
      }

      // console.log(data);
    } catch (error) {
      console.log("error",error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded h-70 w-80 flex flex-col gap-6"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <div className="flex flex-col justify-center p-5 gap-6">
          <input
            type="text"
            placeholder="Enter Email"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="border p-2 rounded "
          />
          <input
            type="text"
            placeholder="Enter Password "
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded "
          />
          <button
            type="submit"
            className="bg-blue-600 p-2 rounded  text-xl font-semibold"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
