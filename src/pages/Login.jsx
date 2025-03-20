import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
      const response = await axios.post(`http://localhost:5000${endpoint}`, formData);
      console.log(response.data);

      alert(isLogin ? "Login Successful!" : "Signup Successful!");
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-[#dadde3] to-[#8db1ec] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_0%,_rgba(255,255,255,0)_100%)] opacity-40"></div>

      <div className="relative p-8 rounded-3xl shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 w-96 text-black">
        <h2 className="text-4xl font-extrabold text-center tracking-wide">{isLogin ? "Login" : "Sign Up"}</h2>

        {error && <p className="text-red-400 text-center mt-2">{error}</p>}

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className="w-full p-3 rounded-lg bg-white/20 text-black border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-white/20 text-black border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-white/20 text-black border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 text-lg bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-4 text-black">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={toggleForm}
            className="text-blue-400 cursor-pointer hover:text-blue-500 transition-colors duration-200"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

