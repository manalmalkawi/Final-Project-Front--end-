import React from "react";
import MyButton from "./MyButton"; 

function AboutBlock({ image, title, description, extraText, buttonText, buttonClass }) {
  return (
    <div className="about-block-container">
      <div className="about-block-image">
        <img src={image} alt={title} />
      </div>

      <div className="about-block-content">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <p>{description}</p>
        {extraText && <p><strong>{extraText}</strong></p>}
        
        
        <MyButton x={buttonText} className={buttonClass} />
      </div>
    </div>
  );
}

export default AboutBlock;
