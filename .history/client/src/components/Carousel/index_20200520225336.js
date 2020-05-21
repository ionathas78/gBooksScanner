import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Carousel({ className, children }) {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
       <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="...">
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="...">
        </div>
      </div>
    </div>
  );
}

function CarouselItem(imageSrc, altText, isActive = false) {
  return (
    <div className={"carousel-item " + (isActive ? "active" : "")}>
      <img src={imageSrc} className="d-block w-100" alt={altText}>
    </div>
  )
}

export default { Carousel, CarouselItem };
