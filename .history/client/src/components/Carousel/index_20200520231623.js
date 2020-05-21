import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
export function Carousel({ children }) {
  let i = -1;
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {children.map(item => {
          i++;
          item.key = i;
          return item;
        })}
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

