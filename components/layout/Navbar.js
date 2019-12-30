import React from "react";
import { Link } from "react-router-dom";
import '../auth/styles.css'
import { withAuth } from '@okta/okta-react';

export default withAuth(
class Navbar extends React.Component {
  logout = async () => {
      this.props.auth.logout('/');
    };
  render() {
  
    return (
      <div className = 'header-color'>
      <nav className="navbar navbar-expand-sm navbar-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Training Portal
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  StudentBoard
                </Link>
              </li>
            
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  ContactUs
                </Link>
              </li>
              <li>
               <button className="btn btn-light btn-lg" onClick={this.logout}>
            Logout
          </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  }
}
);
