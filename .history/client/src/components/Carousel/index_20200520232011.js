import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
export function Carousel({ children }) {
  return (
    <div className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {children.map(item => item)}
      </div> 
    </div>
  );
}

export function CarouselItem({imageSrc, altText, isActive = false}) {
  return (
    <div className={"carousel-item " + (isActive ? "active" : "")}>
      <img src={imageSrc} className="d-block w-100" alt={altText} />
    </div>
  );
}

