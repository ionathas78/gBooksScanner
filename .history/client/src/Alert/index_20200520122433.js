import React from "react";

function Alert({ message, type = "primary" }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="alert alert-{type}" role="alert"
    >
      {message}
    </div>
  );
}

export default Jumbotron;
