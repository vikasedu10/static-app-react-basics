import React from "react";
import "./footer.css"

export const Footer = () => {
  let footerStyle = {
    width: "100%"
  }
  return (
    <div className="bg-dark text-light b-1 py-2" style={footerStyle}>
      <a className="bg-dark text-light" href="todos.com">
      <p className="text-center">
        Copyright %copy; todos.com
      </p>
      </a>
    </div>
  );
};
