import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around bg-primary text-white min-h-16 items-center">
        <div className="flex flex-row">
          <h3 className="text-2xl">
            <Link to="/">Wasan Rooms</Link>
          </h3>
        </div>
        <div className="flex flex-row">
          <div className="px-4 py-2">
            <a href="/login">Login</a>
          </div>
          <div className="px-4 py-2">
            <a href="/register">Register</a>
          </div>
        </div>
        {/* end of column */}
      </div>{" "}
      {/*end of row */}
    </>
  );
};

export default Navbar;
