import React from "react";
import { Outlet } from "react-router-dom";
import { CustomNav } from "./components";
console.log("CustomNav is", CustomNav);

const Layout = () => {
  return (
    <div>
      <div className="container pt-10 mx-auto">
        <CustomNav />
      </div>

      <Outlet />
    </div>
  );
};
export default Layout;
