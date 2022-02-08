import React from "react";

const Signup = () => {
  return (
    //<div>Sign Up right here</div>
    <form>
      <div className="mb-3">
        <fieldset>
          <label for="InputName" className="form-label">
            Name
          </label>
          <input type="name" class="form-control"></input>
        </fieldset>
      </div>
      <div className="mb-3">
        <fieldset>
          <label for="InputEmail" className="form-label">
            Email
          </label>
          <input type="email" class="form-control"></input>
        </fieldset>
      </div>
      <div className="mb-3">
        <fieldset>
          <label for="InputPassword" className="form-label">
            Password
          </label>
          <input type="password" class="form-control"></input>
        </fieldset>
      </div>
    </form>
  );
};

export default Signup;
