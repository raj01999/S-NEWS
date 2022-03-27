import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      key: "",
    };
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            target="_blank"
            rel="noreferrer"
            href="https://raj01999.github.io/MyFirstJavaScriptProject/"
          >
            {this.props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  target="_blank"
                  rel="noreferrer"
                  href="https://raj01999.github.io/Su-Library/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  target="_blank"
                  rel="noreferrer"
                  href="https://raj01999.github.io/Dummy-Project-5/"
                >
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  target="_blank"
                  rel="noreferrer"
                  href="https://raj01999.github.io/fetch-data/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tutorial
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      target="_blank"
                      rel="noreferrer"
                      href="https://raj01999.github.io/first-React-app/"
                    >
                      React
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      target="_blank"
                      rel="noreferrer"
                      href="https://raj01999.github.io/MyFirstWebsite/"
                    >
                      JavaScript
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      target="_blank"
                      rel="noreferrer"
                      href="https://raj01999.github.io/MySecondWebsite/"
                    >
                      Html-Css
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.state.key}
                onChange={(e) => {
                  this.setState({ key: e.target.value });
                }}
              />
              <button
                className="btn btn-primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  if (this.state.key.length < 3) return;
                  this.props.searching(this.state.key);
                  this.setState({ key: "" });
                }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Sus",
};
