import React from "react";
import { Link } from "react-router-dom";

const Block = ({ title, icon, link }) => {
  return (
    <Link to={link} className="cursor-pointer">
      <div
        className="rounded-lg flex items-center justify-center p-9"
        style={{
          backgroundImage: `radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.0625) 100%)`,
        }}
      >
        {icon}
      </div>
      <h2 className="text-center mt-4">{title}</h2>
    </Link>
  );
};

export default Block;
