import React from "react";

import Footer from "./Footer";
import Menu from "./Menu";

const AdminPanel = () => {
  return (
    <div>
      <Menu />

      <main className="admin-panel">
        <section className="dashboard-hero">
          <img src="assets/images/wave.png" alt="" className="wave" />
          <h2>User Dashboard</h2>
        </section>

        <section className="dashboard-main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <div className="profile-info">
                  <div className="profile-img">
                    <div className="img">
                      <div className="text">
                        <h3>JD</h3>
                      </div>
                    </div>
                  </div>
                  <div className="profile-name">
                    <h3>John Doe</h3>
                  </div>
                </div>
                <div className="dashboard-tab-container">
                  <ul className="tabs">
                    <li data-tab-show="manage-users" className="tab active">
                      Manage Users
                    </li>
                    <li data-tab-show="manage-products" className="tab">
                      Manage Products
                    </li>
                    <li data-tab-show="manage-admins" className="tab">
                      Manage Admins
                    </li>
                    <li data-tab-show="admin-settings" className="tab">
                      Settings
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <ul className="dashboard-tab-content-container">
                  <div className="background-texture"></div>
                  <li id="manage-users" className="dashboard-content active">
                    <h1>Manage Users</h1>

                    <div className="manage-users-container">
                      <div className="form-container">
                        <div className="form-control">
                          <div className="search-container">
                            <input
                              id="name"
                              type="text"
                              className="input-custom"
                            />
                            <div className="search-icon">
                              <img
                                src="assets/images/search-dark.svg"
                                alt="search"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li id="manage-products" className="dashboard-content">
                    <h1>Manage Products</h1>

                    <div className="form-control">
                      <div className="search-container">
                        <input id="name" type="text" className="input-custom" />
                        <div className="search-icon">
                          <img
                            src="assets/images/search-dark.svg"
                            alt="search"
                          />
                        </div>
                      </div>
                    </div>
                  </li>

                  <li id="manage-admins" className="dashboard-content">
                    <h1>Manage Admins</h1>

                    <div className="form-control">
                      <div className="search-container">
                        <input id="name" type="text" className="input-custom" />
                        <div className="search-icon">
                          <img
                            src="assets/images/search-dark.svg"
                            alt="search"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li id="admin-settings" className="dashboard-content">
                    <h1>Admin Settings</h1>

                    <div className="settings-tab-container horizontal-tab-container">
                      <ul className="tabs">
                        <li data-tab-show="active" className="tab active">
                          Payment
                        </li>
                        <li data-tab-show="pending" className="tab">
                          Communication
                        </li>
                        <li data-tab-show="deactivated" className="tab">
                          Contact
                        </li>
                        <li data-tab-show="expired" className="tab">
                          Linked Accounts
                        </li>
                        <li data-tab-show="licence" className="tab">
                          Licence
                        </li>
                        <li data-tab-show="privacy" className="tab">
                          Privacy
                        </li>
                      </ul>

                      <ul className="settings-content-container content">
                        <li
                          id="active"
                          className="tab-content settings-content active"
                        >
                          <p>No orders to show</p>
                        </li>
                        <li
                          id="pending"
                          className="tab-content settings-content"
                        >
                          <p>No orders to show...!!</p>
                        </li>
                        <li
                          id="deactivated"
                          className="tab-content settings-content"
                        >
                          <p>No orders to show..!!</p>
                        </li>
                        <li
                          id="expired"
                          className="tab-content settings-content"
                        >
                          <p>No orders to show...!</p>
                        </li>
                        <li
                          id="licence"
                          className="tab-content settings-content"
                        >
                          <p>No orders to show...!</p>
                        </li>
                        <li
                          id="privacy"
                          className="tab-content settings-content"
                        >
                          <p>No orders to show...!</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminPanel;
