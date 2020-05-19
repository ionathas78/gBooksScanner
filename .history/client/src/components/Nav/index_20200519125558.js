import React from "react";
import { Link } from "react-router-dom";


function Nav({children}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      {children.map(item => {
        return (
          <Link 
            to={item.path}
            style={ color: "white"}
          >
            {item.name}
          </Link>
        )
      })}
    </nav>
  );
}

export default Nav;
