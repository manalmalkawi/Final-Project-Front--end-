import React, { useState } from "react";

const Team = ({ title, subtitle, members }) => {
  return (
    <section className="team_member section-padding">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p dangerouslySetInnerHTML={{ __html: subtitle }} />
        </div>
        <div className="row text-center">
          {members.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    transition: "transform 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    zIndex: isHovered ? 10 : 1,
  };

  return (
    <div
      className="col-xl-3 col-md-6 col-sm-6 col-12 wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay="0.1s"
      data-wow-offset="0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={cardStyle}
    >
      <div className="our-team">
        <div className="team_img">
          <img
            src={member.image}
            alt={member.name}
            width="330"
            height="370"
            className="attachment-full size-full"
          />
          <ul className="social">
            {member.social.facebook && (
              <li>
                <a href={member.social.facebook}>
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
            )}
            {member.social.twitter && (
              <li>
                <a href={member.social.twitter}>
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            )}
            {member.social.linkedin && (
              <li>
                <a href={member.social.linkedin}>
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            )}
            {member.social.website && (
              <li>
                <a href={member.social.website}>
                  <i className="fa fa-globe"></i>
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="team-content">
          <h3 className="title">
            <a href={member.profileLink}>{member.name}</a>
          </h3>
          <span className="post">{member.post}</span>
          <div className="sth_det2">
            <span className="ti-file">
              <u>{member.courses} Courses</u>
            </span>
            <span className="ti-user">
              <u>{member.students} Students</u>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
