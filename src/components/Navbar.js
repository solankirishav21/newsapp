import React, { Component } from "react";


export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsMan
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
                <a className="nav-link active mx-3" aria-current="page" href="/home">
                  Home
                </a>
                <a className="nav-link active mx-3" aria-current="page" href="/general">
                  General
                </a>
                <a className="nav-link active mx-3" aria-current="page" href="/business">
                  Business
                </a>
                <a className="nav-link active mx-3" aria-current="page" href="/sports">
                  Sports
                </a>
                <a className="nav-link active mx-3" aria-current="page" href="/entertainment">
                  Entertainment
                </a>
                <a className="nav-link active mx-3" aria-current="page" href="/health">
                  Health
                </a>
                <a className="nav-link active mx-3" aria-current="page" href="/science">
                  Science
                </a>
                <a className="nav-link active mx-3" aria-current="page" href="/technology">
                  Technology
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
