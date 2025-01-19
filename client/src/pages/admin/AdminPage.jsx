import React from "react";
import { Link } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";

const AdminPage = () => {
  return (
    <>
      <h3 className="text-primary   w-full text-center text-3xl font-thin py-2">
        Admin Page
      </h3>
      <NavbarAdmin />
    </>
  );
};

export default AdminPage;
