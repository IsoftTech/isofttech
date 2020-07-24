import React from "react";

import { Link, withRouter } from "react-router-dom";

const Menu = () => (
  <div>
    <article className="update">
      Coronavirus Update: Visit <a href="/">My tickets</a> for your event's
      status or click <a href="/">here</a> to learn more about our impacted
      event policy
    </article>
    <header className="tobpar-sm-wrapper">
      <div className="toolbar">
        <div className="hamburger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <Link to="/">
          <img
            src="assets/logos/favicon.png"
            className="logo"
            alt="Love1Ticket"
          />
        </Link>
        <div className="signin">
          <Link to="/signin">
            <h6>Sign in</h6>
            <img src="assets/images/user.svg" alt="sign in" />
          </Link>
        </div>
      </div>
      <div className="searchbar"></div>
    </header>
    <section className="menu-sm">
      <div className="menu-header">
        <Link to="/">
          <img src="assets/logos/favicon.png" alt="Love1Ticket" />
        </Link>
        <div className="close-menu-btn">×</div>
      </div>
      <ul className="menu-section">
        <li className="menu-section__item">
          <Link to="/signin">Sign in</Link>
        </li>
        <li className="menu-section__item">
          <Link to="#">My Tickets</Link>
        </li>
        <li className="menu-section__item">
          <a href="#">Sell</a>
        </li>
      </ul>
      <ul className="menu-section">
        <li className="menu-section__item">
          <Link to="#">Teams</Link>
        </li>
        <li className="menu-section__item">
          <Link to="#">Fixtures</Link>
        </li>
        <li className="menu-section__item">
          <Link to="#">Theater &amp; Comedy</Link>
        </li>
        <li className="menu-section__item">
          <Link to="#">Cities</Link>
        </li>
        <li className="menu-section__item">
          <Link to="#">Gift Cards</Link>
        </li>
      </ul>
      <ul className="menu-section">
        <li className="menu-section__item">
          <h4>Have Questions?</h4>
        </li>
        <li className="menu-section__item">
          <Link href="#">Help Center</Link>
        </li>
        <li className="menu-section__item">
          <Link to="#">Last minute services</Link>
        </li>
      </ul>
    </section>
    <header className="topbar-lg-wrapper">
      <div className="toolbar">
        <div className="toolbar-logosearch__wrapper">
          <div className="toolbar-logo__wrapper">
            <Link to="/">
              <img src="assets/logos/logo-black.png" alt="Love1Ticket" />
            </Link>
          </div>
          <div className="toolbar-search__wrapper">
            <img
              src="assets/images/search.svg"
              className="search-icon"
              alt="search"
            />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Event, artist or team"
            />
          </div>
        </div>
        <div className="toolbar-nav__wrapper">
          <div className="nav-item">
            <div className="dropdown">
              <div className="dropdown-toggle">Sell</div>
              <ul className="dropdown-menu">
                <li className="dropdown-menu__item">Sell tickets</li>
                <li className="dropdown-menu__item">My listings</li>
                <li className="dropdown-menu__item">My sales</li>
              </ul>
            </div>
          </div>
          <Link to="#" className="nav-item">
            My tickets
          </Link>
          <Link to="/signin" className="nav-item">
            Sign in
          </Link>
          <Link to="#" className="nav-item">
            <img src="assets/images/user.svg" alt="user" />
          </Link>
        </div>
      </div>
      <nav className="navbar-wrapper">
        <ul className="navbar">
          <li className="nav-item">
            <div className="dropdown">
              <div className="dropdown-toggle">
                <Link to="#">Teams</Link>
              </div>

              <ul className="dropdown-menu">
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <div className="dropdown">
              <div className="dropdown-toggle">
                <Link to="#">Fixtures</Link>
              </div>
              <ul className="dropdown-menu">
                <li className="dropdown-menu__item">Lorum Ipsum</li>
                <li className="dropdown-menu__item">Lorum Ipsum</li>
                <li className="dropdown-menu__item">Lorum Ipsum</li>
                <li className="dropdown-menu__item">Lorum Ipsum</li>
                <li className="dropdown-menu__item">Lorum Ipsum</li>
                <li className="dropdown-menu__item">Lorum Ipsum</li>
                <li className="dropdown-menu__item">Lorum Ipsum</li>
                <li className="dropdown-menu__item">Lorum Ipsum</li>
                <li className="dropdown-menu__item">Lorum Ipsum</li>
                <li className="dropdown-menu__item">Lorum Ipsum</li>
                <li className="dropdown-menu__item">Lorum Ipsum</li>
                <li className="dropdown-menu__item">Lorum Ipsum</li>
                <li className="dropdown-menu__item">Lorum Ipsum</li>
                <li className="dropdown-menu__item">Lorum Ipsum</li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <div className="dropdown">
              <div className="dropdown-toggle">
                <Link>Theater &amp; Comedy</Link>
              </div>
              <ul className="dropdown-menu">
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <div className="dropdown">
              <div className="dropdown-toggle">
                <Link>Top Matches</Link>
              </div>
              <ul className="dropdown-menu">
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
                <li className="dropdown-menu__item">Lorem Ipsum</li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);

export default withRouter(Menu);
