import "./experience.scss";
import React, { useContext } from "react";

import { experienceData } from "../data";
import { navigationData } from "../data";
import { OptionContext } from "../../App";

export default function Experience() {
  const context = useContext(OptionContext);

  return (
    <div>
      <h2>My experience</h2>

      <div className="experience-container">
        {experienceData[context.language].map((item, i) => (
          <div className="experience__item" key={i}>
            <div className="time">
              <p>&#10149;</p>
              <h3>{item.time}</h3>
            </div>
            {item.place && <div className="place">{item.place}</div>}

            {item.position && <div className="position">{item.position}</div>}

            {item.department && (
              <div className="department">{item.department}</div>
            )}

            {item.link && (
              <a href={item.link} className="link" target="_blank">
                {context.language === "vn"
                  ? "Đường dẫn tham khảo"
                  : "Reference link"}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
