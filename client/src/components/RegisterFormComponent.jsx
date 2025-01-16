import React, { useState, useEffect } from "react";
import axios from "axios";
import ErrorComponent from "./ErrorComponent";
import SuccessComponent from "./SuccessComponent";
import LoadingComponent from "./LoadingComponent";

const RegisterFormComponent = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const checkPasswords = () => {
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const result = await axios.post("/api/users/register", user);
    } catch (error) {
      console.log(error);
    }
  };

  const inputFieldClass =
    "mt-1 block w-full px-3 py-2 gap-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm";
  return (
    <>
      {loading && <LoadingComponent />}
      {success && <SuccessComponent success="User Registered Successfully" />}
      {error && <ErrorComponent error="Email already registred" />}
      <form className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={user.name}
            onChange={handleChange}
            required
            className={inputFieldClass}
          />
        </div>
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
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            value={user.mobile}
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
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={user.confirmPassword}
            onChange={handleChange}
            onBlur={checkPasswords}
            required
            className={inputFieldClass}
          />
        </div>
        <div>
          <button
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 "
            onClick={registerUser}
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterFormComponent;
