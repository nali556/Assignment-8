import React from "react";
import { Link } from "react-router-dom";
//Nav, has Navbar which is displayed on top of every page
export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React Bank
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link to="/">
                    <a className="nav-link active" aria-current="page" href="#">
                        Home
                    </a>
                </Link>
                <Link to="/login">
                    <a className="nav-link" href="#">
                        Log In
                    </a>
                </Link>
                <Link to="userProfile">
                    <a className="nav-link" href="#">
                        Profile
                    </a>
                </Link>
                <Link to="/debits">
                    <a className="nav-link" href="#">
                        Debits
                    </a>
                </Link>
                <Link to="/credits">
                    <a className="nav-link" href="#">
                        Credits
                    </a>
                </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
