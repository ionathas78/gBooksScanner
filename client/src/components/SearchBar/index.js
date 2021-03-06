import React from "react";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function SearchBar({ type = "default", className, onChange, onClick, onKeyDown, props }) {
  return (
    <div className="input-group">
      <input className="form-control" type="text" onChange={onChange} onKeyDown={onKeyDown} {...props} />
      <div className="input-group-append">
        <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")} type="button">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
