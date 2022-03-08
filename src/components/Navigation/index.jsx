import "./navigation.scss";
import React, { useContext, useEffect, useState } from "react";
import navigationHover, {
  clickOnLogo,
  hideNavigation,
  navigationActive,
  navigationActiveResponsive,
} from "../../util/navigationCommon";
import { useLocation, useNavigate } from "react-router-dom";

import { navigationData } from "../data";

import Select from "react-select";
import Switch from "react-switch";
import styled from "styled-components";
import { OptionContext } from "../../App";

import avatar from "../../assets/Profile.jpg";
import fileCV from "../../assets/HuyDoan-Frontend-Fresher.pdf";
import colorStylesReactSelect from "../../util/colorStyleReactSelect";
import LoadingIcon from "./Loading";

export default function Navigation({ initProps }) {
  const [isShowLoadingDownload, setIsShowLoadingDownload] = useState(false);

  let navigate = useNavigate();
  const location = useLocation();
  const context = useContext(OptionContext);
  const isIntroductionPage = location.pathname === "/introduction";

  const { themeMode, setThemeMode, language, setLanguage } = initProps;

  useEffect(() => {
    navigate("/introduction");
    navigationHover();
    navigationActive();
    navigationActiveResponsive();
    window.scrollTo(0, 0);
    hideNavigation();
  }, []);

  useEffect(() => {
    if (themeMode === "light") {
      document.querySelector("body").classList?.remove("dark-mode");
    } else {
      document.querySelector("body").classList.add("dark-mode");
    }
    navigationActive();
    navigationActiveResponsive();
  }, [themeMode, language, location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, [location.pathname]);

  function handleClickItem(item) {
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

  const colorStylesSelect = colorStylesReactSelect(context);

  function hanldeClickDownload(e, href) {
    setIsShowLoadingDownload(true);
    setTimeout(() => setIsShowLoadingDownload(false), 2000);
  }

  return (
    <div className="navigation">
      <div className="navigation__items">
        {navigationData[context.language].map((item, i) => (
          <div
            className={` item ${
              item.navigation == location.pathname ? "active" : ""
            }`}
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
        <div className="item-active-responsive"></div>
      </div>

      <div className="options">
        {!isIntroductionPage && (
          <div
            className="options__cvInfor"
            onClick={() => {
              navigate("./introduction");
              clickOnLogo();
            }}
          >
            <img src={avatar}></img>
            <h3>Huy Đoàn</h3>
            <p style={{ fontWeight: "500" }}>FrontEnd Fresher</p>
          </div>
        )}

        <div
          className="options__cvInfor2"
          onClick={() => {
            navigate("./introduction");
            clickOnLogo();
          }}
        >
          <img src={avatar}></img>
          <h3>Huy Đoàn</h3>
        </div>

        <div className="options__downloadCV">
          {!isShowLoadingDownload ? (
            <a
              href={fileCV}
              download
              onClick={(e, href) => hanldeClickDownload(e, href)}
            >
              <i className="fa-solid fa-download"></i>
              <p style={{ marginTop: "3px" }}>Download Huy's CV</p>
            </a>
          ) : (
            <LoadingIcon></LoadingIcon>
          )}
        </div>

        <div className="options__language">
          <i className="fa-solid fa-language"></i>
          <SelectStyled
            isSearchable={false}
            options={optionLanguage}
            defaultValue={
              optionLanguage[
                optionLanguage.findIndex((x) => x.value === language)
              ]
            }
            // menuIsOpen={true}
            styles={colorStylesSelect}
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
