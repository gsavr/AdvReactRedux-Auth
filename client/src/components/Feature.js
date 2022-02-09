import React, { useState, useEffect } from "react";
import requireAuth from "./auth/requireAuth";
import MDSpinner from "react-md-spinner";
import Trend from "react-trend";

const Feature = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3200);
  });

  console.log(show);

  const renderSpinner = () => {
    if (show) {
      return (
        <MDSpinner
          size={50}
          aria-label="Loading..."
          duration={2000}
          /* color1="#e91e63"
          color2="#673ab7"
          color3="#009688"
          color4="#ff5722" 
          borderSize={7}*/
        />
      );
    } else return null;
  };
  return (
    <div className="fs-1 text-center fw-bolder">
      THIS IS SECRET!
      <Trend
        data={[0, 10, 5, 22, 3.6, 11]}
        autoDraw
        autoDrawDuration={3000}
        autoDrawEasing="ease-in"
        gradient={["#0FF", "#F0F", "#FF0"]}
        /* width={800}
        height={200} */
        strokeWidth={3}
        padding={18}
        smooth
        radius={7}
      />
      <p>{renderSpinner()}</p>
    </div>
  );
};

export default requireAuth(Feature);
