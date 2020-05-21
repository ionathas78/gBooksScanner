import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
export function Media({ children }) {
  return (
    <ul class="list-unstyled">
      {children.map(item => item)}
    </ul>
  );
}

export function MediaItem({key, imageSrc, altText}) {
  return (
    <li class="media" key={key}>
      <img src={imageSrc} class="mr-3" alt={altText} />
    </li>
  );
}

