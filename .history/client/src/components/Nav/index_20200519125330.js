import React from "react";

function Nav({children}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      {children.map(item => {
        return (
          <Link to={item.path}>{item.name}</Link>
        )
      })}
    </nav>
  );
}

export default Nav;
