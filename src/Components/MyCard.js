import React from 'react';

function MyCard({ title, description, buttonText, link }) {
  return (
    <div className="single_tp">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="cta">
        <span>{buttonText}</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5" />
          <polyline points="8 1 12 5 8 9" />
        </svg>
      </a>
    </div>
  );
}

export default MyCard;
