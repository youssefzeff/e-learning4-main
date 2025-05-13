import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="MonEcole Logo" className="navbar-logo" />
      </div>
      <ul className="menu">
        {/* Main Navigation */}
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            À propos
          </Link>
        </li>
        <li>
          <Link
            to="/support"
            className={location.pathname === "/support" ? "active" : ""}
          >
            Support
          </Link>
        </li>

        {/* Learning Management */}
        <li className="dropdown">
          
          <Link
            to="#"
            className={
              ["/courses", "/certifications", "/quiz"].includes(
                location.pathname
              )
                ? "active"
                : ""
            }
          >
            Learning
          </Link>

          <ul className="dropdown-list">
            <li>
              <Link
                to="/courses"
                className={location.pathname === "/courses" ? "active" : ""}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/certifications"
                className={
                  location.pathname === "/certifications" ? "active" : ""
                }
              >
                Certifications
              </Link>
            </li>
            <li>
              <Link
                to="/quiz"
                className={location.pathname === "/quiz" ? "active" : ""}
              >
                Quiz
              </Link>
            </li>
          </ul>
        </li>

        {/* Admin / Management */}
        <li className="dropdown">
          <Link
            to="#"
            className={
              ["/classes", "/virtual-classes", "/student-progress"].includes(
                location.pathname
              )
                ? "active"
                : ""
            }
          >
            Management
          </Link>
          <ul className="dropdown-list">
            <li>
              <Link
                to="/classes"
                className={location.pathname === "/classes" ? "active" : ""}
              >
                Classes Management
              </Link>
            </li>
            <li>
              <Link
                to="/student-progress"
                className={
                  location.pathname === "/student-progress" ? "active" : ""
                }
              >
                Student Progress
              </Link>
            </li>
            <li>
              <Link
                to="/virtual-classes"
                className={
                  location.pathname === "/virtual-classes" ? "active" : ""
                }
              >
                Virtual Classes
              </Link>
            </li>
          </ul>
        </li>

        {/* Account / Profile */}
        <li>
          <Link
            to="/payment"
            className={location.pathname === "/payment" ? "active" : ""}
          >
            Payment
          </Link>
        </li>
      </ul>

      <div>
        <Link to="/register">
          <button className="join-btn">Join Now</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
