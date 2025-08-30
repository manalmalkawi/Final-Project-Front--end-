

import React from "react";
import MyButton from "./MyButton";

function CoursesSection({ background, items, title, subtitle, viewAllLink }) {
  return (
    <div className="elementor-widget-container">
      <div
        className="bc_bg_two section-padding"
        style={{ backgroundImage: `url(${background || ""})` }}
      >
        <div className="container">
          <div className="section-title">
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <p dangerouslySetInnerHTML={{ __html: subtitle }} />
          </div>

          <div className="row">
            {items.map((item, index) => (
              <div
                className="col-lg-6 col-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
                key={index}
              >
                <div className="course-slide2 course_2">
                  <div className="course-img2">
                    <img
                      src={item.image}
                      alt={item.title}
                      width="420"
                      height="280"
                    />
                    {item.date && (
                      <div className="course-date2">
                        <span className="month2">{item.date}</span>
                      </div>
                    )}
                    {item.price && (
                      <div className="course-date2">
                        <span className="month2">
                          {item.price === "Free" ? "Free" : `${item.currency}${item.price}`}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* المحتوى */}
                  <div className="course-content2">
                    {item.category && item.categoryLink && (
                      <a className="c_btn2 ccat2" href={item.categoryLink}>
                        {item.category}
                      </a>
                    )}
                    <h3>
                      <a href={item.link}>{item.title}</a>
                    </h3>
                  </div>

                  {item.lessons || item.hours || item.rating || item.level ? (
                    <div className="co_list">
                      {item.lessons && (
                        <span>
                          <i className="fa fa-file-text"></i> {item.lessons} Lessons
                        </span>
                      )}
                      {item.hours && (
                        <span className="course_duration">
                          <i className="fa fa-clock-o"></i> {item.hours} hours
                        </span>
                      )}
                      {item.rating && (
                        <span>
                          <i className="fa fa-star"></i> {item.rating}
                        </span>
                      )}
                      {item.level && (
                        <span>
                          <i className="fa fa-signal"></i> <strong>{item.level}</strong>
                        </span>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}

            {viewAllLink && (
              <div className="col-lg-12 text-center">
                <div className="cc_btn">
                  <MyButton x="View All" className="" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesSection;

