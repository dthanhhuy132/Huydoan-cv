import "./navigation.scss";
import React, { useContext, useEffect, useState } from "react";
import navigationHover, { navigationActive } from "../../util/navigationHover";
import { useNavigate } from "react-router-dom";

import { navigationData } from "../data";

import Select from "react-select";
import Switch from "react-switch";
import styled from "styled-components";
import { OptionContext } from "../../App";

import avatar from "../../assets/Profile.jpg";

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

  const colourStylesSelect = {
    control: (styles) => ({
      ...styles,
      backgroundColor: context.themeMode === "light" ? "" : "#44444444",
      // borderColor: context.themeMode === "light" ? "" : "red",
    }),

    singleValue: (styles) => ({
      ...styles,
      color: context.themeMode === "light" ? "" : "#fff",
    }),

    indicatorContainer: (styles) => ({
      ...styles,
      color: context.themeMode === "light" ? "" : "#fff",

      ":hover": {
        ...styles,
        color: context.themeMode === "light" ? "" : "#fff",
      },
    }),

    menu: (styles) => ({
      ...styles,
      borderRadius: "5px",
      overflow: "hidden",
    }),
    menuList: (styles) => ({
      ...styles,
      borderRadius: "5px",
      overflow: "hidden",
    }),

    option: (styles, state) => {
      return {
        ...styles,
        // color: "#000",
        backgroundColor:
          context.themeMode === "light"
            ? state.isSelected
              ? "#5463ff"
              : ""
            : state.isSelected
            ? "#519dfa"
            : "grey",
        overFlow: "hidden",

        ":hover": {
          ...styles[":hover"],
          cursor: "pointer",
          backgroundColor:
            context.themeMode === "light"
              ? state.isSelected
                ? ""
                : "#c2c6f6"
              : state.isSelected
              ? ""
              : "#bbb",
        },
      };
    },
  };

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
        <div className="options__cvInfor">
          <img src={avatar}></img>
          <h3>Huy Đoàn</h3>
          <p style={{ fontWeight: "500" }}>FrontEnd Fresher</p>
        </div>

        <div className="options__contact"></div>
        <div className="options__downloadCV">
          <i class="fa-solid fa-download"></i>
        </div>

        <div className="options__language">
          <p>{language === "vn" ? "Language:" : "Ngôn ngữ:"}</p>
          <SelectStyled
            options={optionLanguage}
            defaultValue={optionLanguage[0]}
            // menuIsOpen={true}
            styles={colourStylesSelect}
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
            onColor={context.themeMode === "light" ? "#5463ff" : "#5ba5fe"}
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
