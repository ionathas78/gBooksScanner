import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
export function Media({ children }) {
  return (
    <ul class="list-unstyled d-flex" style={{ maxWidth: "100%", overflow: "auto" }}>
      {children.map(item => item)}
    </ul>
  );
}

export function MediaItem({key, imageSrc, altText, link}) {
  return (
    <li class="media" key={key} style={{ margin: "0 10px" }}>
      <a href={link} >
        <img src={imageSrc} class="mr-3" alt={altText} />
      </a>
    </li>
  );
}

