import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import $ from "jquery";

import Menu from "../core/Menu";
import { loginStart } from "../store/actions/index";
import * as actionTypes from "../store/actions/actionTypes";

const Signin = (props) => {
  // Initial states of the form and error

  const [userState, setUserState] = useState({});
  const [errorState, setErrorState] = useState({});

  // Change error state if any error is thrown while making POST

  useEffect(() => {
    if (props.errors) setErrorState(props.errors);
  }, [props.errors]);

  // If the user is signed in, redirect to /dashboard everytime tries to open sign in page

  useEffect(() => {
    if (props.auth.isAuthenticated) props.history.push("/dashboard");
  });

  // Reset the error state every time the component is Mount and Unmount

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
    props.login(userState, props.history);
  };

  return (
    <div>
      <Menu />
      {props.auth ? props.auth.email : null}
      <section className="signin">
        <h2>Sign in to StubHub</h2>

        <p className="error-placeholder">
          {errorState.error ? errorState.error : null}
        </p>

        <form onSubmit={formSubmitHandler}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
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
          <Link to="/" className="forgot-password">
            Forgot Password?
          </Link>
          <button type="submit">Sign in</button>
        </form>

        <h4>Connect with friends on StubHub</h4>

        <p>
          New to StubHub? <Link to="/signup">Create account</Link>
        </p>
        <p>
          Have an access code? <Link to="/">Find your order</Link>
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

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(loginStart(user)),
    resetErrors: () => dispatch({ type: actionTypes.RESET_ERRORS }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signin));
