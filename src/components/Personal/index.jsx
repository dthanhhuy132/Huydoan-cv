import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "./personal.scss";

import React, { useContext, useEffect, useState } from "react";
import { OptionContext } from "../../App";
import personalData, { personalDataOther } from "./data";

import { grabScroll } from "./grabScroll";
import Fancybox from "./fancybox.js";

export default function Personal() {
  const context = useContext(OptionContext);
  const [isGrabSlide, setIsGrabSlide] = useState(false);

  useEffect(() => {
    grabScroll();
    setIsGrabSlide(grabScroll());
    return () => {};
  });

  function handleClickLg(e) {
    console.log(isGrabSlide);
    if (isGrabSlide) e.preventDefault();
  }

  return (
    <div className="personal">
      {personalData["vn"].map((item, i) => (
        <div key={i}>
          <div className="personal__introduction">
            <h2>{item.name}</h2>
            <p>{item.introduction}</p>
          </div>

          <div className="lightGallery-wapper">
            <Fancybox>
              {item.imgList.map((img, i) => (
                <a
                  data-fancybox="gallery"
                  href={item.imgList[i]}
                  key={i}
                  onClick={(e) => handleClickLg(e)}
                >
                  <img alt="" src={img} className="slider__img" />
                </a>
              ))}
            </Fancybox>
          </div>
        </div>
      ))}

      <div>
        <div className="personal__introduction">
          <h2>{personalDataOther["vn"].name}</h2>
          <p>{personalDataOther["vn"].introduction}</p>
        </div>

        <div className="lightGallery-wapper-other ">
          <Fancybox>
            {personalDataOther["vn"]?.imgList.map((img, i) => (
              <a
                data-fancybox="gallery"
                href={img}
                key={i}
                onClick={(e) => handleClickLg(e)}
              >
                <img alt="" src={img} className="slider__img" />
              </a>
            ))}
          </Fancybox>
        </div>
      </div>
    </div>
  );
}
