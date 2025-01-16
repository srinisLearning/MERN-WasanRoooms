import React, { useState, useEffect } from "react";
import ErrorComponent from "./ErrorComponent";

const LoginFormComponent = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const loginUser = (e) => {
    e.preventDefault();
    if (user.email !== "" && !user.password !== "") {
      console.log(user);
    } else {
      console.log("Pls enter all the fields");
      <ErrorComponent error="Please fill all the fields" />;
    }
  };

  const inputFieldClass =
    "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm";
  return (
    <>
      <form className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            required
            className={inputFieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            required
            className={inputFieldClass}
          />
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 "
            onClick={loginUser}
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginFormComponent;
