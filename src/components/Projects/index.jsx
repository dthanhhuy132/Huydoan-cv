import "./project.scss";
import React, { useContext, useEffect, useState } from "react";

import { projectData } from "../data";
import { OptionContext } from "../../App";
import { useLocation } from "react-router-dom";

import setColorProjectNavigation from "../../util/setColorProjectNavigation";

export default function Projects() {
  const context = useContext(OptionContext);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const projectDataFilter = projectData[context.language];
  const location = useLocation();

  useEffect(() => {
    function setScrollTop() {
      if (document.documentElement.scrollTop > 50) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    }
    if (location.pathname === "/projects")
      window.addEventListener("scroll", setScrollTop);

    setColorProjectNavigation();

    return () => {};
  }, []);

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

        {projectDataFilter.map((item, index) => {
          return (
            <div className="project-item" id={item.name} key={index}>
              <h2
                className="project-item__name"
                style={{ marginBottom: "10px" }}
              >
                &#10148; &nbsp; {item.name}
              </h2>
              <p>
                <i style={{ fontSize: "17px" }}>
                  {context.language === "vn"
                    ? "Giới thiệu: "
                    : "Introduction: "}
                </i>
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
                    <p className="title">
                      {context.language === "vn"
                        ? "Các thư viện chính"
                        : "Main library"}
                    </p>
                    <div>
                      {item.technical.map((tech, i) => (
                        <p key={i}>&#10157; {tech}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {!Array.isArray(item.link) ? (
                <a
                  href={item.link}
                  className="project-item__linkDemo"
                  target="blank"
                >
                  {item.linkDemoName}
                </a>
              ) : (
                item?.link.map((linkItem, index) => (
                  <a
                    key={index}
                    href={linkItem}
                    className="project-item__linkDemo"
                    target="blank"
                  >
                    {item.linkDemoName[index]}
                  </a>
                ))
              )}

              {!Array.isArray(item.youtubeLink) ? (
                <div className="project-item__video">
                  <p style={{ marginBottom: "10px" }}>Video demo</p>
                  <iframe
                    width="1601"
                    height="789"
                    src={item.youtubeLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                item.youtubeLink.map((youtubeLinkItem, index) => (
                  <div className="project-item__video" key={index}>
                    <p style={{ marginBottom: "10px" }}>Video demo</p>
                    <iframe
                      width="1601"
                      height="789"
                      src={youtubeLinkItem}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))
              )}
            </div>
          );
        })}
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
