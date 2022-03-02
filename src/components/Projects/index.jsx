import "./project.scss";
import React, { useContext, useEffect, useState } from "react";

import { projectData } from "../data";
import { OptionContext } from "../../App";

export default function Projects() {
  const context = useContext(OptionContext);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const projectDataFilter = projectData[context.language];

  useEffect(() => {
    function setScrollTop() {
      if (document.documentElement.scrollTop > 50) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    }
    window.addEventListener("scroll", setScrollTop);
  });

  function handleClickToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className="project">
        <div className="project__navigation">
          <ul>
            {projectDataFilter.map((item, index) => (
              <li key={index}>
                <a href={`#${item.name}`}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {projectDataFilter.map((item, index) => (
          <div className="project-item" id={item.name} key={index}>
            <h2 className="project-item__name" style={{ marginBottom: "10px" }}>
              &#10148; &nbsp; {item.name}
            </h2>
            <p>
              <i style={{ fontSize: "17px" }}>Giới thiệu: </i>
              <span>{item.introduce}</span>
            </p>

            <div className="project-item__function-technical">
              {item.function && (
                <div className="function">
                  <p className="title">{item.functionHighlight}</p>
                  <div>
                    {item.function.map((func, i) => (
                      <p key={i}>&#10157; {func}</p>
                    ))}
                  </div>
                </div>
              )}

              {item.technical && (
                <div className="technical">
                  <p className="title">Công nghệ và thư viện chính</p>
                  <div>
                    {item.technical.map((tech, i) => (
                      <p key={i}>&#10157; {tech}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href={item.link}
              className="project-item__linkDemo"
              target="blank"
            >
              {item.linkDemoName}
            </a>

            <div className="project-item__video">
              <p style={{ marginBottom: "10px" }}>Video demo</p>
              <iframe
                width="1601"
                height="789"
                src="https://www.youtube.com/embed/OkRPv5Sa72I"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      {showScrollTop && (
        <div
          className="project__toTop"
          title="Go to Top"
          onClick={handleClickToTop}
        >
          {/* <div className="goToTop-icon">{goToTopIcon}</div> */}
          <i className="fa-solid fa-angle-down"></i>
        </div>
      )}
    </>
  );
}
