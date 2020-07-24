import React, { useState, useEffect, Fragment } from "react";

import Modal from "./Modal";
import axios from "axios";

const withErrorHandler = (WrappedComponent) => {
  return (props) => {
    const [error, setError] = useState(null);

    const reqInterceptor = axios.interceptors.request.use((req) => {
      console.log(req);
      setError(null);
      return req;
    });
    const resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (err) => {
        console.log("ERRORRR", err);
        setError(err);

        return Promise.reject(err);
      }
    );

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
    }, [reqInterceptor, resInterceptor]);

    const errorConfirmedHandler = () => {
      setError(null);
    };

    return (
      <Fragment>
        <Modal show={error} modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Fragment>
    );
  };
};

export default withErrorHandler;
