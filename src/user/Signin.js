import React from "react";

import { Link } from "react-router-dom";

import Menu from "../core/Menu";

const Signin = () => (
  <div>
    <Menu />
    <section className="signin">
      <h2>Sign in to StubHub</h2>

      <form action="">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
        <button type="submit">Sign in</button>
      </form>

      <h4>Connect with friends on StubHub</h4>

      <p>
        New to StubHub? <Link to="/signup">Create account</Link>
      </p>
      <p>
        Have an access code? <a href="#">Find your order</a>
      </p>
    </section>
  </div>
);

export default Signin;
