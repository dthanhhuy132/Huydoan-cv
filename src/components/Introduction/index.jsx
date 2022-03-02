import "./introduction.scss";
import React, { useContext } from "react";

import avatarProfile from "../../assets/Profile.jpg";
import { OptionContext } from "../../App";
import { introductionData } from "../data";

export default function Introduction() {
  const context = useContext(OptionContext);

  const introductionDataLanguage = introductionData[context.language];
  console.log("object", introductionDataLanguage);
  return (
    <div className="introduction-container">
      <div className="infor">
        <div className="infor__avatar">
          <img src={avatarProfile} />
        </div>
        <div className="infor__detail">
          <h1 className="infor__detail__name">Đoàn Thanh Huy</h1>
          <h3 className="infor__detail__position">
            Front-end Developer (Fresher)
          </h3>
          <div className="infor__detail__personal">
            <div className="personal-item">
              <p>{introductionDataLanguage.birthday}</p>
              <p>: 13/12/1995</p>
            </div>
            <div className="personal-item">
              <p>{introductionDataLanguage.phone}</p>
              <p>: 0368 494 898</p>
            </div>
            <div className="personal-item">
              <p>Gmail</p>
              <p>: dthanhhuy132@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="introduction-item introduction">
        <h2>{introductionDataLanguage.introductionTitle}</h2>
        <div
          style={{ textAlign: "justify" }}
          dangerouslySetInnerHTML={{
            __html: introductionDataLanguage.introductionText,
          }}
        ></div>
      </div>

      <div className="introduction-item skill">
        <h2>{introductionDataLanguage.technicalTitle}</h2>

        <div className="skill__name">
          {introductionDataLanguage.technicalList.map((item, idx) => (
            <p key={idx}>&#10148; {item}</p>
          ))}
        </div>
      </div>

      <div className="introduction-item skill">
        <h2>{introductionDataLanguage.jobGoalTitle}</h2>
        <p style={{ textAlign: "justify" }}>
          {introductionDataLanguage.jobGoalText}
        </p>
      </div>

      <div className="introduction-item hobby">
        <h2>{introductionDataLanguage.orientation}</h2>
        <div className="orientation__name">
          {introductionDataLanguage.orientationList.map((item, idx) => (
            <p key={idx}>&#10148; {item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
