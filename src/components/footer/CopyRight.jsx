import React from "react";
import { Link } from "react-router-dom";

const CopyRight = () => {
  return (
    <div className="bg-primary text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-1">
          Designed & Developed by{" "}
          <Link
            to="https://ecodedash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline  hover:text-gray-200 transition"
          >
            Ecode Dash
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CopyRight;
