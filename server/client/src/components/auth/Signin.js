import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { useNavigate } from "react-router-dom";

const Signin = ({ handleSubmit, signin, authErrorMessage }) => {
  const navigate = useNavigate();

  const onSubmit = (formProps) => {
    //console.log(formProps);
    signin(formProps, () => {
      navigate("/feature");
    });
  };

  return (
    <div>
      <div>Sign In to Access Auth</div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button className="btn btn-primary">Sign In</button>
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
  reduxForm({ form: "signin" })
)(Signin);
