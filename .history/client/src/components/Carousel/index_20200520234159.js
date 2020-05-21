import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
export function Carousel({ children }) {
  return (
    <div className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {children.map(item => item)}
      </div> 
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
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

