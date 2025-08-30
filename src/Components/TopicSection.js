import React from "react";
import CountUp from "react-countup";

function TopicsSection({ title, subtitle, topics, background }) {
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
            {topics.map((item, index) => (
              <div key={index} className="col-md-3 col-6 mb-4">
                <div className="topic_box text-center p-4 shadow-sm rounded bg-white">
                  {item.icon ? (
                    <div className="d-flex align-items-center justify-content-center">
                      <i
                        className={`${item.icon} fs-2 me-2`}
                        style={{ color: item.color }}
                      ></i>
                      <h3 className="mb-0">
                        <CountUp end={Number(item.title)} duration={2.5} />
                      </h3>
                    </div>
                  ) : (
                    <>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="mb-3"
                        style={{ maxHeight: "60px" }}
                      />
                      <h5 className="mb-1">{item.title}</h5>
                    </>
                  )}
                  <p className="mt-2">{item.courses}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopicsSection;
