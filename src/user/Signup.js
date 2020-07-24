import React from "react";

import { Link } from "react-router-dom";

import Menu from "../core/Menu";

const Signup = () => (
  <div>
    <Menu />

    <section className="register">
      <h2>Sign Up for StubHub</h2>

      <form action="">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <input
          type="phone"
          name="phone"
          id="phone"
          placeholder="Phone"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
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

export default Signup;
