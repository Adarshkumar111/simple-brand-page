import React from "react";
import  amazone from '../Images/amazon.png'
import  flipkart from '../Images/flipkart.png'
import  hero from '../Images/hero-image.png'
function HeroSection() {
  return (
    <>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
            OUR SHOE
          </p>
          <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondry-btn">Category</button>
          </div>

          <div className="shopping">
            <p>Also Available on</p>
            <div className="brand-icons">
              <img src={amazone} alt="amazon-logo" />
              <img src={flipkart} alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
        <img src={hero} alt="hero-image-logo" />
        </div>
      </main>
    </>
  );
}

export default HeroSection;
