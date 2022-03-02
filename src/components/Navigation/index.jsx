import "./navigation.scss";
import React, { useContext, useEffect, useState } from "react";
import navigationHover, { navigationActive } from "../../util/navigationHover";
import { useNavigate } from "react-router-dom";

import { navigationData } from "../data";

import Select from "react-select";
import Switch from "react-switch";
import styled from "styled-components";
import { OptionContext } from "../../App";

export default function Navigation({ initProps }) {
  const [activeItem, setActiveItem] = useState(0);
  let navigate = useNavigate();
  const context = useContext(OptionContext);

  const { themeMode, setThemeMode, language, setLanguage } = initProps;

  useEffect(() => {
    navigationHover();
    navigate("/introduction");
  }, []);

  useEffect(() => {
    if (themeMode === "light") {
      document.querySelector("body").classList?.remove("dark-mode");
    } else {
      document.querySelector("body").classList.add("dark-mode");
    }
  }, [themeMode]);

  function handleClickItem(item) {
    setActiveItem(item.active);
    navigate(item.navigation);
    navigationActive();
  }

  const optionLanguage = [
    { value: "vn", label: "Tiếng Việt" },
    { value: "en", label: "English" },
  ];

  function handleChangeLanguage(options) {
    setLanguage(options.value);
  }

  function handleSwitchMode() {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  }

  return (
    <div className="navigation">
      <div className="navigation__items">
        {navigationData[context.language].map((item, i) => (
          <div
            className={` item ${item.active === activeItem ? "active" : ""}`}
            key={i}
            onClick={() => handleClickItem(item)}
          >
            {item.icon}
            <p className="item__tilte" id={item.id}>
              {item.name}
            </p>
          </div>
        ))}

        <div className="item-emty"></div>
        <div className="item-active"></div>
      </div>

      <div className="options">
        <div className="options__language">
          <p>{language === "vn" ? "Language:" : "Ngôn ngữ:"}</p>
          <SelectStyled
            options={optionLanguage}
            defaultValue={optionLanguage[0]}
            // menuIsOpen={true}
            onChange={(options) => handleChangeLanguage(options)}
          />
        </div>
        <div className="options__darkmode">
          <Switch
            onChange={handleSwitchMode}
            checked={themeMode === "light" ? false : true}
            borderRadius={7}
            uncheckedIcon={<i className="fa-solid fa-moon"></i>}
            checkedIcon={<i className="fa-solid fa-lightbulb"></i>}
            onColor="#5463ff"
          />
        </div>
      </div>
    </div>
  );
}

const SelectStyled = styled(Select)`
  font-size: 14px;

  outline: none;
`;
