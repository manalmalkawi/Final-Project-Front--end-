import React from "react";

function VideoSection({ backgroundImage, videoUrl }) {
  return (
    <div className="elementor-widget-container">
      <section
        className="vid_area section-padding"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="video-area">
                <a
                  href={videoUrl}
                  className="video-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="play-circle">
                    <i className="fa fa-play"></i>
                    <span className="play-circle-halo"></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VideoSection;
