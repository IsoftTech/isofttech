import React from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        props.history.push("/signin")
      )
    }
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(withRouter(PrivateRoute));
