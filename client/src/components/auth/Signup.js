import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { useNavigate } from "react-router-dom";

const Signup = ({ handleSubmit, signup, authErrorMessage }) => {
  const navigate = useNavigate();

  const onSubmit = (formProps) => {
    //console.log(formProps);
    signup(formProps, () => {
      navigate("/feature");
    });
  };

  return (
    <div>
      <div>Register to Access Auth</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <fieldset>
            <label for="InputName" className="form-label">
              Name
            </label>
            <Field
              name="name"
              component="input"
              type="text"
              //Bootstrap attribute
              className="form-control"
            />
          </fieldset>
        </div>
        <div className="mb-3">
          <fieldset>
            <label for="InputEmail" className="form-label">
              Email
            </label>
            <Field
              name="email"
              component="input"
              type="email"
              className="form-control"
            />
          </fieldset>
        </div>
        <div className="mb-3">
          <fieldset>
            <label for="InputPassword" className="form-label">
              Password
            </label>
            <Field
              name="password"
              component="input"
              type="password"
              className="form-control"
            />
          </fieldset>
        </div>
        <div
          className="text-uppercase"
          style={{ color: "red", paddingBottom: ".5rem" }}
        >
          {authErrorMessage}
        </div>
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { authErrorMessage: auth.errorMessage };
};

//compose lets multiple HigherOrderComponents be used with this component
export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "signup" })
)(Signup);
