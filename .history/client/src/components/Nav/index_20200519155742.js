import React from "react";
import { Link } from "react-router-dom";


function Nav({children}) {
  let i = -1;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      {children.map(item => {
        i++;
        return (
          <Link 
            key={i}
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
