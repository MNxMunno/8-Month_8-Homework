import React from "react";
import "./Modul.scss";

const Modul = ({ close, children }) => {
  return (
    <div>
      <div onClick={() => close(false)} className="overlay"></div>
      <div className="modul">{children}</div>
    </div>
  );
};

export default Modul;
