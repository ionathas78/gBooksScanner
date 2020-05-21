import React from "react";

function Alert({ message, type = "primary" }) {
  return (
    <div
      className="alert alert-{type}" role="alert"
    >
      {message}
    </div>
  );
}

export default Alert;
