import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//ComposedComponent is the Higher Order Component that is requireAuth
export default (ChildComponent) => {
  const ComposedComponent = (props) => {
    const isLoggedIn = useSelector((state) => state.auth.authenticated);
    const navigate = useNavigate();

    useEffect(() => {
      if (!isLoggedIn) {
        navigate("/");
      }
    });

    return <ChildComponent {...props} />;
  };

  return ComposedComponent;
};
