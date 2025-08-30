

import React from "react";

const SingleBlog = ({ img, date, category, categoryLink, title, link, withImage = true }) => (
  <div className={`single_blog ${withImage ? "" : "no-image"}`}>
    {withImage && img && (
      <img
        loading="lazy"
        decoding="async"
        width="370"
        height="260"
        src={img}
        className="attachment-edusion_blog size-edusion_blog wp-post-image"
        alt={title || ""}
      />
    )}
    <div className="content_box">
      <span>
        {date} | <a href={categoryLink} rel="category tag">{category}</a>
      </span>
      <h2>
        <a href={link}>{title}</a>
      </h2>
      <a href={link} className="cta">
        <span>READ MORE</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </a>
    </div>
  </div>
);

const BlogSection = ({
  posts = [],
  sectionTitle = "News",
  sectionSubtitle = "Our Latest <span><u>Blogs</u></span>",
  background
}) => {
  return (
    <div className="elementor-widget-container">
      <div
        className="bc_bg_two section-padding"
        style={{ backgroundImage: `url(${background || ""})` }}
      >
        <div className="container">
          <div className="section-title">
            <h2 dangerouslySetInnerHTML={{ __html: sectionTitle }} />
            <p dangerouslySetInnerHTML={{ __html: sectionSubtitle }} />
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <SingleBlog {...posts[0]} withImage={true} />
            </div>

            <div className="col-lg-4 col-md-6">
              <SingleBlog {...posts[1]} withImage={true} />
            </div>

            <div className="col-lg-4 col-md-12 d-flex flex-column gap-3 blog-small-wrapper">
              {posts.slice(2, 4).map((post, index) => (
                <div key={index} className="small-blog-wrapper">
                  <SingleBlog {...post} withImage={false} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
