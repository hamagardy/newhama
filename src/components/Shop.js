import React from "react";
import "../styles/shop.css";

const Shop = () => {
  return (
    <section id="shop" className="shop-section">
      <div className="shop-content">
        <h2 className="shop-title">Shop</h2>
        <p className="shop-description">
          Explore my collection of premium Lens Studio files, AR assets, digital templates, 
          and professional services. Get high-quality resources for your creative projects.
        </p>
        <div className="shop-features">
          <div className="shop-feature">
            <span>Lens Studio Files</span>
          </div>
          <div className="shop-feature">
            <span>AR/VR Assets</span>
          </div>
          <div className="shop-feature">
            <span>Digital Services</span>
          </div>
        </div>
        <a 
          href="https://shop.hamagardy.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="shop-button"
        >
          Visit Shop
        </a>
      </div>
    </section>
  );
};

export default Shop;
