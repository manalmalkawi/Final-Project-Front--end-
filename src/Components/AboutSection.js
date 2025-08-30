import React from 'react';
import MyCard from './MyCard';

function AboutSection() {
  const cardsData = [
    {
      title: "Quality Education",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      buttonText: "Explore Courses",
      link: "#",
    },
    {
      title: "Experienced Teachers",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      buttonText: "Explore Courses",
      link: "#",
    },
    {
      title: "Delicious Food",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      buttonText: "Explore Courses",
      link: "#",
    },
  ];

  return (
    <div
      className="about-section-wrapper"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap', }}
    >
      {cardsData.map((card, index) => (
        <div key={index} className="card-wrapper" style={{ flex: '1 1 30%' }}>
          <MyCard
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            link={card.link}
          />
        </div>
      ))}
    </div>
  );
}

export default AboutSection;
