import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
export function Media({ children }) {
  return (
    <ul class="list-unstyled d-flex">
      {children.map(item => item)}
    </ul>
  );
}

export function MediaItem({key, imageSrc, altText}) {
  return (
    <li class="media" key={key} style={{ margin: "0 10px" }}>
      <img src={imageSrc} class="mr-3" alt={altText} />
    </li>
  );
}

