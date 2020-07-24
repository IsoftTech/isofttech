import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile, updateProfile } from "../../store/actions/index";
import { isAuthenticated } from "../../store/actions/index";
import { createCategory } from "./apiAdmin";

const AddCategory = (props) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  //DESTRUCTURE USER AND TOKEN FROM LOCAL STORAGE
  const { token } = isAuthenticated();

  const handleChange = (e) => {
    setError("");
    setName(e.target.value);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    //REQUEST TO API OF CATEGORY
    createCategory(props.user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
      }
    });
  };

  const newCategoryForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-container">
        <label htmlFor="name">Catgory Name</label>
        <input
          name="name"
          value={name}
          type="text"
          className="input-custom"
          onChange={handleChange}
          autoFocus
          required
        />
      </div>
      <button className="btn-blue">Create Category</button>
    </form>
  );

  const showSuccess = () => {
    if (success) {
      return <h3 className="text-success">{name} is created</h3>;
    }
  };

  const showError = () => {
    if (error) {
      return <h3 className="text-danger">Category should be unique</h3>;
    }
  };

  const goBack = () => (
    <div className="mt-5">
      <Link to="/admin" className="text-underline text-warning">
        Back to Dashboard
      </Link>
    </div>
  );

  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        {showSuccess()}
        {showError()}
        {newCategoryForm()}
        {goBack()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(AddCategory);
