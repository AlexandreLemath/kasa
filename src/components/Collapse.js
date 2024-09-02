import React, { useState } from "react";
import "../styles/Collapse.scss";
// Import your image
import myCustomIcon from "../assets/images/Vector (8).png";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="collapse-title">
        {title}

        <img
          className={`collapse-icon ${isOpen ? "rotate" : ""}`}
          src={myCustomIcon}
          alt="Toggle Icon"
          onClick={toggleCollapse}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  );
};

export default Collapse;
