import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
export function Media({ children }) {
  return (
    <ul className="list-unstyled d-flex" style={{ maxWidth: "90%", marginLeft: "5%", overflow: "auto" }}>
      {children.map(item => item)}
    </ul>
  );
}

export function MediaItem({key, imageSrc, altText, link}) {
  return (
    <li className="media" data-key={key} style={{ margin: "0 10px" }}>
      <a href={link} >
        <img src={imageSrc} className="mr-3" alt={altText} />
      </a>
    </li>
  );
}

