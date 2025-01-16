import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/login";
  }
  return (
    <>
      <div className="flex justify-around bg-primary text-white min-h-16 items-center">
        <div className="flex flex-row">
          <h3 className="text-3xl font-extrabold text-white">
            <Link to="/">Wasan Rooms</Link>
          </h3>
        </div>
        <div className="flex flex-row">
          {user ? (
            <>
              <div className="px-4 py-2">{user.name}</div>
              <div className="px-4 py-2">BOOKINGS</div>
              <div className="px-4 py-2">
                <button onClick={logout}>LOGOUT</button>
              </div>
            </>
          ) : (
            <>
              <div className="px-4 py-2">
                <a href="/login">LOGIN</a>
              </div>
              <div className="px-4 py-2">
                <a href="/register">REGISTER</a>
              </div>
            </>
          )}
        </div>
        {/* end of column */}
      </div>{" "}
      {/*end of row */}
    </>
  );
};

export default Navbar;
