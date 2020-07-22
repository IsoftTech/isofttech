import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import $ from "jquery";

import Menu from "../core/Menu";
import { registerStart } from "../store/actions/index";
import * as actionTypes from "../store/actions/actionTypes";

const Signup = (props) => {
  // Initial states of the form and error

  const [userState, setUserState] = useState({});
  const [errorState, setErrorState] = useState({});

  // Change error state if any error is thrown while making POST

  useEffect(() => {
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

    if (props.errors) setErrorState(props.errors);
  }, [props.errors]);

  // If the user is signed in, redirect to /dashboard everytime tries to open sign in page

  useEffect(() => {
    if (props.auth.isAuthenticated) props.history.push("/dashboard");
  });

  // Reset the error state every time the component is Mount and Unmount

  useEffect(() => {
    return () => props.resetErrors();
  }, []);

  const inputChangeHandler = (e) => {
    let inputField = e.target.name;
    let inputValue = e.target.value;

    setUserState((prevState) => {
      return {
        ...prevState,
        [inputField]: inputValue,
      };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.register(userState, props.history);
  };

  return (
    <div>
      <Menu />

      <section className="register">
        <h2>Sign Up for StubHub</h2>

        <p className="error-placeholder">
          {errorState.error ? errorState.error : null}
        </p>

        <form action="" onSubmit={formSubmitHandler}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            onChange={inputChangeHandler}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={inputChangeHandler}
          />
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="Phone"
            onChange={inputChangeHandler}
          />
          <div className="password-field-container">
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              onChange={inputChangeHandler}
            />
            <span className="show-password-toggler" style={{ top: "8px" }}>
              <img src="/assets/images/show-password-icon.png" />
            </span>
          </div>
          <button type="submit">Sign Up</button>
          <p className="agreement">
            By purchasing or signing in, you agree to
            <a href="#">our user agreement</a> and acknowledge our
            <a href="register.html">privacy notice</a>.
          </p>
        </form>

        <h4>Connect with friends on StubHub</h4>

        <p className="bold">
          Have a StubHub account?<Link to="/signin">Sign in</Link>
        </p>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    errors: state.errors,
  };
};
const mapDisptachToProps = (dispatch) => {
  return {
    register: (user, history) => dispatch(registerStart(user, history)),
    resetErrors: () => dispatch({ type: actionTypes.RESET_ERRORS }),
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(withRouter(Signup));
