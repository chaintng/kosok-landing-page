import * as React from 'react';
import './App.css';

import logo from './images/kosok-logo-white.png';
import leading from './images/leading2.jpg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="main-navigation">
          <div className="wrapper">
            <div className="logo">
              <img src={logo} alt="logo" style={{ height: 20, width: "auto" }}/>
            </div>
            <ul className="MainNavigation-items">
              <li className="MainNavigation-item"><a className="MainNavigation-itemButton"
                                                     href="/en/online-audio-mastering/">
                <div>Mastering</div>
              </a></li>
              <li className="MainNavigation-item"><a className="MainNavigation-itemButton"
                                                     href="/en/digital-distribution/">
                <div>Distribution</div>
              </a></li>
              <li className="MainNavigation-item"><a href="https://samples.landr.com" target="_top" rel="noopener"
                                                     className="MainNavigation-itemButton">
                <div>Samples</div>
              </a></li>
              <li className="MainNavigation-item"><a className="MainNavigation-itemButton" href="/en/pricing/">
                <div>Pricing</div>
              </a></li>
              <li className="MainNavigation-item"><a href="https://blog.landr.com/" target="_top" rel="noopener"
                                                     className="MainNavigation-itemButton">
                <div>Blog</div>
              </a></li>
              <li className="MainNavigation-item"><a href="https://support.landr.com/" target="_top" rel="noopener"
                                                     className="MainNavigation-itemButton">
                <div>Help</div>
              </a></li>
              <li className="MainNavigation-item MainNavigation-item--secondary"><a
                className="MainNavigation-itemButton" href="/en/login/">
                <div>Log in</div>
              </a></li>
              <li className="MainNavigation-item MainNavigation-item--secondary Sign-up"><span
                className="u-hidden-lg-down"><a className="MainNavigation-itemButton-signUp"
                                                href="/en/signup/?homePage=Home"><div
                className="Button Button--primary Button--xsmall"><div className="Button-wrapper"><div
                className="Button-text">Sign up</div></div></div></a></span></li>
            </ul>
          </div>
        </div>
        <div className="site-body">
          <div className="wrapper">
            <div className="Hero-content-title"><h1
              className="Heading Heading--mg">Create, we'll do the rest. </h1></div>
            <div className="Hero-content-description"><p>A podcast solution for podcast creator.
              Since first step until monetization.</p></div>
          </div>
          <img src={leading} className="hero-lead" alt="hero" />
        </div>
      </div>
    );
  }
}

export default App;
