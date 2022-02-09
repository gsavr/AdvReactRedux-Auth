import React from "react";
import requireAuth from "./auth/requireAuth";

const Feature = () => {
  return <div className="fs-1 text-center fw-bolder">THIS IS SECRET!</div>;
};

export default requireAuth(Feature);
