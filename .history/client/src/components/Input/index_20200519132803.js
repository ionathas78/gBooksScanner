import React from "react";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function SearchBar({ props, type = "default", className, onClick }) {
  return (
    <div className="input-group input-group-lg">
      <input className="form-control" type="text" {...props} />
      <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
