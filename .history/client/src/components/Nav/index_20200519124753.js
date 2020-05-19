import React from "react";

function Nav({children}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      {children.map(item => {
        return item;
      })}
    </nav>
  );
}

export default Nav;
