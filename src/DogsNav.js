import React, { Component } from "react";

export class DogsNav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="http://localhost:3000/#">
              Navbar
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default DogsNav;
