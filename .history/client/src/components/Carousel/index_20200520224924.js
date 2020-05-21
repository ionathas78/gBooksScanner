import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({ className }) {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="..." className="d-block w-100" alt="...">
        </div>
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

export default Button;
