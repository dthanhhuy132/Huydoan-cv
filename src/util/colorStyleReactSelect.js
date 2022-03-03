function colorStylesReactSelect(context) {
  return {
    control: (styles) => ({
      ...styles,
      backgroundColor: context.themeMode === "light" ? "" : "#44444444",
      border: "1px solid #888888",
      borderRadius: "6px",
      minWidth: "105px",

      "@media only screen and (max-width: 768px)": {
        ...styles["@media only screen and (max-width: 768px)"],
        minHeight: "28px",
      },
    }),

    valueContainer: (styles) => ({
      ...styles,

      "@media only screen and (max-width: 768px)": {
        ...styles["@media only screen and (max-width: 768px)"],
        padding: "2px 4px",
      },
    }),

    singleValue: (styles) => ({
      ...styles,
      color: context.themeMode === "light" ? "" : "#fff",
    }),

    indicatorsContainer: (styles) => ({
      ...styles,
      display: "none",
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

      "@media only screen and (max-width: 768px)": {
        ...styles["@media only screen and (max-width: 768px)"],
        top: "28px",
        left: "0",
      },
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
}

export default colorStylesReactSelect;
