import "./loading-page.scss";
import React, { useEffect, useState } from "react";

import videoBg from "../../assets/videoBg.mp4";

export default function LoadingPage() {
  const [goOutClass, setGoOutClass] = useState("animate__fadeInLeftBig");
  const [isShowTyping, setIsShowTyping] = useState(true);
  const [isShowThank, setIsShowThank] = useState(false);

  useEffect(() => {
    setTimeout(() => setGoOutClass("animate__fadeOutRightBig"), 5000);
    setTimeout(typingText, 1300);
  }, []);

  const text = "Welcome to Huy's CV";
  let i = 0;

  function typingText() {
    const textWelcome = document.querySelector(".text__welcome");
    if (textWelcome) {
      textWelcome.innerHTML += text.charAt(i);
      if (i < text.length) {
        setTimeout(typingText, 70);
        i++;
      }
    }

    if (i === text.length) {
      setIsShowTyping(false);
      setTimeout(() => {
        setIsShowThank(true);
      }, 1000);
    }
  }

  return (
    <div className={`loading-page animate__animated ${goOutClass}`}>
      <div className="overlay-banner"></div>
      <video autoPlay muted loop className="video">
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className="text">
        <div
          className={`text-wc__container ${
            isShowTyping ? "" : "text__transform-to-top"
          } `}
        >
          <h1 className="text__welcome"></h1>
          {isShowTyping && (
            <h1 className="animate__animated animate__flash"> |</h1>
          )}
        </div>
        {isShowThank && (
          <h1 className="text__thank animate__animated animate__bounceInUp">
            Thanks for your time...
          </h1>
        )}
      </div>
    </div>
  );
}
