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
    if (isGrabSlide) e.preventDefault();
  }

  return (
    <div className="personal">
      <p
        className="personal__introduction"
        style={{ fontWeight: 500, marginBottom: "25px" }}
      >
        <q>
          <i>
            {context.language === "vn"
              ? "Bên dưới là các thiết kế do em thực hiện khi tham gia vào các hoạt động trước đây. Đó cũng là một phần lý do khiến em rẽ sang con đường lập trình web. Cảm ơn anh/chị đã xem!!!"
              : "The pictures as below are my design when participating in previous activities. That is also part of the reason why I turned to web programming. Thank you for watching"}
          </i>
        </q>
      </p>

      {personalData[context.language].map((item, i) => (
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
          <h2>{personalDataOther[context.language].name}</h2>
        </div>

        <div className="lightGallery-wapper-other ">
          <Fancybox>
            {personalDataOther[context.language]?.imgList.map((img, i) => (
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
