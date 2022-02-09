import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Signout = ({ signout }) => {
  useEffect(() => {
    signout();
  });

  return <div className="fs-4 text-center">Hope to see you again soon!</div>;
};

export default connect(null, actions)(Signout);
