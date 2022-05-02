import React from "react";
import "../App.css";

function Header() {

    return(
        <div>

<div class="sidebar">
            <img src="logo.jpg" alt="profile picture" className="img-fluid rounded-circle my-4 p-1 d-none d-md-block shadow"/>
            <img src=""/>
             <a href="#" className="navbar-brand mx-0 font-weight-bold  text-nowrap" >Home</a>
        <ul className="navbar-nav flex-column w-100 justify-content-center">
        <li className="nav-item">
              <a href="/add" className="nav-link"> Add Employee</a>
            </li>
            <li className="nav-item">
              <a href="update" className="nav-link"> Update Employee</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"> View Employee</a>
            </li>
            <li className="nav-item">
              <a href="/delete" className="nav-link"> Delete Employee</a>
            </li>
            <li className="nav-item">
              <a href="/all" className="nav-link"> Employee Report</a>
            </li>
            <li className="nav-item">
              <a href="/att" className="nav-link"> Attendance </a>
            </li>
              
            </ul>
      </div>



       
       
        </div>

    )
}

export default Header;