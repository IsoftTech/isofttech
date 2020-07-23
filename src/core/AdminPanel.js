import React, { useEffect, useState } from "react";
import $ from "jquery";

import Menu from "./Menu";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  // Do stuff when component mounts

  useEffect(() => {
    // Add event listeners on buttons
    // Dashboard tab events

    function tabChangeHandler(event) {
      $(event.data.tabContainer + " .tabs > .tab").removeClass("active");
      $(this).addClass("active");

      var contentToShow = $(this).attr("data-tab-show");
      $(event.data.contentContainer + " > " + event.data.content).removeClass(
        "active"
      );
      $(event.data.contentContainer + " > #" + contentToShow).addClass(
        "active"
      );
    }

    $(".dashboard-tab-container .tabs > .tab").on(
      "click",
      "",
      {
        tabContainer: ".dashboard-tab-container",
        contentContainer: ".dashboard-tab-content-container",
        content: ".dashboard-content",
      },
      tabChangeHandler
    );

    // Orders tab events

    $(".orders-tab-container .tabs > .tab").on(
      "click",
      "",
      {
        tabContainer: ".orders-tab-container",
        contentContainer: ".orders-content-container",
        content: ".orders-content",
      },
      tabChangeHandler
    );

    // Listings tab events

    $(".listings-tab-container .tab").on(
      "click",
      "",
      {
        tabContainer: ".listings-tab-container",
        contentContainer: ".listings-content-container",
        content: ".listings-content",
      },
      tabChangeHandler
    );

    // Sales tab events

    $(".sales-tab-container .tab").on(
      "click",
      "",
      {
        tabContainer: ".sales-tab-container",
        contentContainer: ".sales-content-container",
        content: ".sales-content",
      },
      tabChangeHandler
    );

    // Payments tab events

    $(".payments-tab-container .tab").on(
      "click",
      "",
      {
        tabContainer: ".payments-tab-container",
        contentContainer: ".payments-content-container",
        content: ".payments-content",
      },
      tabChangeHandler
    );

    // Favourites tab events

    $(".favourites-tab-container .tab").on(
      "click",
      "",
      {
        tabContainer: ".favourites-tab-container",
        contentContainer: ".favourites-content-container",
        content: ".favourites-content",
      },
      tabChangeHandler
    );

    // Settings tab events

    $(".settings-tab-container .tab").on(
      "click",
      "",
      {
        tabContainer: ".settings-tab-container",
        contentContainer: ".settings-content-container",
        content: ".settings-content",
      },
      tabChangeHandler
    );

    // Password toggler events

    $(".show-password-toggler").click(function () {
      const toggleImg = $(this).find("img");
      const inputField = $(this).siblings("input");
      if (toggleImg.attr("src") === "/assets/images/show-password-icon.png") {
        toggleImg.attr("src", "/assets/images/hide-password-icon.jpg");
        inputField.attr("type", "text");
      } else if (
        toggleImg.attr("src") === "/assets/images/hide-password-icon.jpg"
      ) {
        toggleImg.attr("src", "/assets/images/show-password-icon.png");
        inputField.attr("type", "password");
      }
    });
  }, []);

  return (
    <div>
      <Menu />

      <main className="admin-panel">
        <section className="dashboard-hero">
          <img src="assets/images/wave.png" alt="" className="wave" />
          <h2>Admin Panel</h2>
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
                    <li data-tab-show="manage-category" className="tab">
                      Manage Category
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
                      <div class="orders-tab-container horizontal-tab-container">
                        <ul class="tabs">
                        <li data-tab-show="all-user" class="tab active">
                            All Users
                          </li>
                          <li data-tab-show="add-user" class="tab ">
                            Add User
                          </li>
                          <li data-tab-show="edit-user" class="tab">
                            Edit User
                          </li>
                          <li data-tab-show="delete-user" class="tab">
                            Delete User
                          </li>
                        </ul>

                        <ul class="orders-content-container content">
                        <li
                            id="all-user"
                            class="tab-content orders-content active"
                          >
                            <h2>All Users</h2>
                          </li>
                          
                          <li
                            id="add-user"
                            class="tab-content orders-content "
                          >
                            <h2>Add User</h2>
                          </li>
                          <li id="edit-user" class="tab-content orders-content">
                            <h2>Edit User</h2>
                          </li>
                          <li
                            id="delete-user"
                            class="tab-content orders-content"
                          >
                            <h2>Delete User</h2>
                          </li>
                        </ul>
                      </div>
                      {/* <div className="form-container">
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
                      </div> */}
                    </div>
                  </li>
                  <li id="manage-products" className="dashboard-content">
                    <h1>Manage Products</h1>

                    <div class="orders-tab-container horizontal-tab-container">
                      <ul class="tabs">
                      <li data-tab-show="all-product" class="tab active">
                          All Product
                        </li>
                        <li data-tab-show="add-product" class="tab ">
                          Add Product
                        </li>
                        <li data-tab-show="edit-product" class="tab">
                          Edit Product
                        </li>
                        <li data-tab-show="delete-product" class="tab">
                          Delete Product
                        </li>
                      </ul>

                      <ul class="orders-content-container content">
                      <li
                          id="all-product"
                          class="tab-content orders-content active"
                        >
                          <h2>All Product</h2>
                        </li>
                        <li
                          id="add-product"
                          class="tab-content orders-content "
                        >
                          <h2>Add Product</h2>
                        </li>
                        <li
                          id="edit-product"
                          class="tab-content orders-content"
                        >
                          <h2>Edit Product</h2>
                        </li>
                        <li
                          id="delete-product"
                          class="tab-content orders-content"
                        >
                          <h2>Delete Product</h2>
                        </li>
                      </ul>
                    </div>

                    {/* <div className="form-control">
                      <div className="search-container">
                        <input id="name" type="text" className="input-custom" />
                        <div className="search-icon">
                          <img
                            src="assets/images/search-dark.svg"
                            alt="search"
                          />
                        </div>
                      </div>
                    </div> */}
                  </li>

                  <li id="manage-admins" className="dashboard-content">
                    <h1>Manage Admins</h1>

                    <div class="orders-tab-container horizontal-tab-container">
                      <ul class="tabs">
                        <li data-tab-show="add-admin" class="tab active">
                          Add Admin
                        </li>
                        <li data-tab-show="edit-admin" class="tab">
                          Edit Admin
                        </li>
                        <li data-tab-show="delete-admin" class="tab">
                          Delete Admin
                        </li>
                      </ul>

                      <ul class="orders-content-container content">
                        <li
                          id="add-admin"
                          class="tab-content orders-content active"
                        >
                          <h2>Add Admin</h2>
                        </li>
                        <li id="edit-admin" class="tab-content orders-content">
                          <h2>Edit Admin</h2>
                        </li>
                        <li
                          id="delete-admin"
                          class="tab-content orders-content"
                        >
                          <h2>Delete Admin</h2>
                        </li>
                      </ul>
                    </div>

                    {/* <div className="form-control">
                      <div className="search-container">
                        <input id="name" type="text" className="input-custom" />
                        <div className="search-icon">
                          <img
                            src="assets/images/search-dark.svg"
                            alt="search"
                          />
                        </div>
                      </div>
                    </div> */}
                  </li>

                  <li id="manage-category" className="dashboard-content">
                    <h1>Manage Category</h1>

                    <div class="orders-tab-container horizontal-tab-container">
                      <ul class="tabs">
                      <li data-tab-show="all-category" class="tab active">
                          Add Category
                        </li>
                        <li data-tab-show="add-category" class="tab ">
                          Add Category
                        </li>
                        <li data-tab-show="edit-category" class="tab">
                          Edit Category
                        </li>
                        <li data-tab-show="delete-category" class="tab">
                          Delete Category
                        </li>
                      </ul>

                      <ul class="orders-content-container content">
                      <li
                          id="all-category"
                          class="tab-content orders-content active"
                        >
                          <h2>All Category</h2>
                        </li>
                        <li
                          id="add-category"
                          class="tab-content orders-content "
                        >
                          <h2>Add Category</h2>
                        </li>
                        <li
                          id="edit-category"
                          class="tab-content orders-content"
                        >
                          <h2>Edit Category</h2>
                        </li>
                        <li
                          id="delete-category"
                          class="tab-content orders-content"
                        >
                          <h2>Delete Category</h2>
                        </li>
                      </ul>
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
