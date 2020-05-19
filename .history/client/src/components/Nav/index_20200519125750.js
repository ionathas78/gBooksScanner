import React from "react";
import { Link } from "react-router-dom";


function Nav({children}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      {children.map(item => {
        return (
          <Link 
            style={{ color: "white" }}
            to={item.path}
          >
            {item.name}
          </Link>
        )
      })}
    </nav>
  );
}

export default Nav;
