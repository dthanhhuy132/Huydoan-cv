import "./navigation.scss";
import React, { useContext, useEffect, useState } from "react";
import navigationHover, { navigationActive } from "../../util/navigationHover";
import { useLocation, useNavigate } from "react-router-dom";

import { navigationData } from "../data";

import Select from "react-select";
import Switch from "react-switch";
import styled from "styled-components";
import { OptionContext } from "../../App";

import avatar from "../../assets/Profile.jpg";
import fileCV from "../../assets/HuyDoan-Frontend-Fresher.pdf";

export default function Navigation({ initProps }) {
  const [activeItem, setActiveItem] = useState(0);
  const [isResponsive, setIsResponsive] = useState(false);
  let navigate = useNavigate();
  const location = useLocation();
  const context = useContext(OptionContext);
  const isIntroductionPage = location.pathname === "/introduction";

  const { themeMode, setThemeMode, language, setLanguage } = initProps;

  useEffect(() => {
    navigate("/introduction");
    navigationHover();
    navigationActive();
  }, []);

  useEffect(() => {
    if (themeMode === "light") {
      document.querySelector("body").classList?.remove("dark-mode");
    } else {
      document.querySelector("body").classList.add("dark-mode");
    }
  }, [themeMode]);

  function handleClickItem(item) {
    navigationActive();
    setActiveItem(item.active);
    navigate(item.navigation);
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
    }),

    singleValue: (styles) => ({
      ...styles,
      color: context.themeMode === "light" ? "" : "#fff",
    }),

    indicatorsContainer: (styles) => ({
      ...styles,
      color: context.themeMode === "light" ? "" : "#fff",
      transform: "rotate(270deg)",

      ":hover": {
        ...styles,
        color: context.themeMode === "light" ? "" : "#fff",
      },
    }),

    indicatorSeparator: (style) => ({
      ...style,
      display: "none",
    }),

    menu: (styles) => ({
      ...styles,
      borderRadius: "5px",
      overflow: "hidden",
      top: "-19%",
      left: "108%",
      zIndex: "999999",
    }),
    menuList: (styles) => ({
      ...styles,
      borderRadius: "5px",
      overflow: "hidden",
      padding: 0,
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
        {!isIntroductionPage && (
          <div className="options__cvInfor">
            <img src={avatar}></img>
            <h3>Huy Đoàn</h3>
            <p style={{ fontWeight: "500" }}>FrontEnd Fresher</p>
          </div>
        )}

        <div className="options__cvInfor2">
          <div className="img-container">
            <img src={avatar}></img>
          </div>
          <h3>Huy Đoàn</h3>
          <p style={{ fontWeight: "500" }}>FrontEnd Fresher</p>
        </div>

        <div className="options__contact"></div>
        <div className="options__downloadCV">
          <a href={fileCV} download>
            <i className="fa-solid fa-download"></i>
            <p>
              <br />
              Download Huy's CV
            </p>
          </a>
        </div>

        <div className="options__language">
          <p>{language === "vn" ? "Language:" : "Ngôn ngữ:"}</p>
          <SelectStyled
            isSearchable={false}
            options={optionLanguage}
            defaultValue={
              optionLanguage[
                optionLanguage.findIndex((x) => x.value === language)
              ]
            }
            // menuIsOpen={true}
            styles={colourStylesSelect}
            onChange={(options) => handleChangeLanguage(options)}
          />
        </div>
        <div className="options__darkmodeSwitch">
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
