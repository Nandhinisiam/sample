import { IoLogIn } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { HiCalculator } from "react-icons/hi2";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { BsTable } from "react-icons/bs";
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li className="nav-hover">
          <NavLink to="/login">
            <IoLogIn size={25} className="icons" style={{ top: 6 }} />
            Login
          </NavLink>
        </li>
        <li className="nav-hover">
          <NavLink to="/signup">
            <FaUserEdit size={25} className="icons" />
            Signup
          </NavLink>
        </li>
        <li className="nav-hover">
          <NavLink to="/employelist">
            {" "}
            <CgProfile size={22} className="icons" />
            EmployeList
          </NavLink>
        </li>
        <li className="nav-hover">
          <NavLink to="/table">
            {" "}
            <BsTable size={20} className="icons" />
            Table
          </NavLink>
        </li>
        <li className="nav-hover">
          <NavLink to="/calculator">
            <HiCalculator size={23} className="icons" />
            Calculator
          </NavLink>
        </li>
        <li className="nav-hover">
          <NavLink to="/counter">
            <RxCounterClockwiseClock size={22} className="icons" />
            Counter
          </NavLink>
        </li>
        <li className="nav-hover">
          <NavLink to="/dum">
            <BsTable size={20} className="icons" />
            Dum
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
