import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
export function Carousel({ children }) {
  return (
    <div className="carousel slide" data-ride="carousel" style={{ height: "100"}}>
      <div className="carousel-inner">
        {children.map(item => item)}
      </div> 
    </div>
  );
}

export function CarouselItem({key, imageSrc, altText, isActive = false}) {
  return (
    <div className={"carousel-item" + (isActive ? " active" : "")} key={key}>
      <img src={imageSrc} className="d-block w-100" alt={altText} />
    </div>
  );
}

