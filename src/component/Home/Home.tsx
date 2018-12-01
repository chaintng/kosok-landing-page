import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/kosok-logo-white.png";
import leading from "../../image/leading2.jpg";

const Home = () => {
  return (
    <div className="App">
      <div className="main-navigation">
        <div className="wrapper">
          <div className="logo">
            <img src={logo} alt="logo" style={{height: 20, width: "auto"}}/>
          </div>
          <ul className="MainNavigation-items">
            <li className="MainNavigation-item">
              <Link to="/Home">
                <div>Home</div>
              </Link>
            </li>
            <li className="MainNavigation-item">
              <a className="MainNavigation-itemButton" href="/en/digital-distribution/">
                <div>Distribution</div>
              </a>
            </li>
            <li className="MainNavigation-item MainNavigation-item--secondary">
              <a className="MainNavigation-itemButton" href="/en/login/">
                <div>Log in</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="site-body">
        <div className="wrapper">
          <div className="Hero-content-title">
            <h1 className="Heading Heading--mg">Create, we'll do the rest. </h1>
          </div>
          <div className="Hero-content-description">
            <p>A podcast solution for podcast creator. Since first step until monetization.</p>
          </div>
        </div>
        <img src={leading} className="hero-lead" alt="hero"/>
      </div>
    </div>
  );
};

export default Home;
