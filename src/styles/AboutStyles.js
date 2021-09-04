import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  root: {
    color: (isDarkTheme) => (isDarkTheme ? "#fcfcfc" : "#111211"),
    // backgroundColor: "red",
    margin: "4rem 0",
    height: "90%",
    overflowX: "hidden",
    overflowY: "auto",
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: "teal",
      margin: "0",
    },
  },
  container: {
    // backgroundColor: "grey",
    marginTop: "5rem",
  },
  topContent: {
    // backgroundColor: "pink",
    width: "60%",
    margin: "0 auto",
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      // backgroundColor: "blue",
      width: "65%",
    },
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "blue",
      width: "85%",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      // backgroundColor: "coral",
    },
  },
  imageHolder: {
    // backgroundColor: "yellow",
    flexBasis: "30%",
    margin: "auto 0",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "4rem",
    },
    [theme.breakpoints.down("lg")]: {
      marginLeft: "0rem",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      marginBottom: "7rem",

      alignItems: "center",
      flexDirection: "column",
      // backgroundColor: "bisque",
    },
    "& img": {
      width: "260px",
      height: "auto",
      padding: "0.3rem",
      filter: `sepia(69%) saturate(50%) hue-rotate(170deg) brightness(101%) contrast(96%)`,
      border: (isDarkTheme) =>
        `2px solid ${isDarkTheme ? `#ba86ba` : "transparent"}`,
      transition: "all 0.3s ease-in",
      borderRadius: "50%",
      boxShadow: (isDarkTheme) =>
        isDarkTheme
          ? "4px 5px 8px 0px rgba(0,0,0,1)"
          : "4px 5px 8px 0px rgba(0,0,0,0.4)",
      [theme.breakpoints.down("md")]: {
        width: "200px",
        // backgroundColor: "blue",
      },
      [theme.breakpoints.down("sm")]: {
        // backgroundColor: "coral",
        margin: 0,
      },
      "@media only screen and (max-width: 768px)": {
        width: "230px",
      },
      "@media only screen and (max-width: 487px)": {
        width: "200px",
      },
      "@media only screen and (max-width: 300px)": {
        width: "180px",
      },
    },
  },
  summaryBox: {
    // backgroundColor: "blue",
    width: "45%",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "teal",
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: "teal",
      width: "100%",
    },
  },
  topHeading: {
    // backgroundColor: "teal",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    fontSize: "2.8rem",
    display: "flex",
    letterSpacing: ".1rem",
    fontFamily: "Raleway,sans-serif",
    fontWeight: "600",
    textShadow: (isDarkTheme) =>
      isDarkTheme ? "none" : `0 0 18px rgba(0, 0, 0, 0.35)`,
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "pink",
      fontSize: "2rem",
    },
    "@media only screen and (max-width: 280px)": {
      fontSize: "1.9rem",
    },
  },
  summaryContent: {
    // backgroundColor: "hotpink",
    marginTop: "2rem",
    fontSize: "1rem",
    letterSpacing: ".06rem",
    wordSpacing: "0.2rem",
    color: (isDarkTheme) => (isDarkTheme ? "#ccd6f6" : "#233554"),
    lineHeight: "1.8rem",
    fontWeight: "400",
    "&>div:first-child": {
      // backgroundColor: "red",
    },
    "&>div": {
      marginBottom: "2rem",
    },
    "@media only screen and (max-width: 380px)": {
      fontSize: "0.8rem",
    },
  },
  download: {
    color: (isDarkTheme) => (isDarkTheme ? "#0a192f" : "#E1F5FE"),
    fontSize: "11px",
    textTransform: "uppercase",
    fontWeight: "800",
    borderRadius: "0px",
    padding: "6px 13px",
    letterSpacing: "0.1rem",
    whiteSpace: "no-wrap",
    outline: "none",
    cursor: "pointer",
    display: "inline-block",
    textAlign: "center",
    boxShadow: (isDarkTheme) =>
      isDarkTheme
        ? `0 0 20px 0px rgba(0, 0, 0, 0)`
        : `0 0 20px 0px rgba(0, 0, 0, 0.35)`,
    backgroundColor: (isDarkTheme) => (isDarkTheme ? "#4FC3F7" : "#01579B"),
    border: (isDarkTheme) => `1px solid ${isDarkTheme ? `#4FC3F7` : `#01579B`}`,
    textDecoration: "none",
    transition: "all 0.3s",
    "&:hover": {
      color: (isDarkTheme) => (isDarkTheme ? "#4FC3F7" : "#01579B"),
      background: "none",
    },
    "@media only screen and (max-width: 414px)": {
      fontSize: "9px",
      padding: "4px 11px",
    },
    "@media only screen and (max-width: 320px)": {
      fontSize: "9px",
      padding: "4px 11px",
    },
  },
  eduContainer: {
    // backgroundColor: "orchid",
    display: "flex",
    flexDirection: "column",
    marginTop: "5rem",
    textAlign: "center",
  },
  eduHeading: {
    // backgroundColor: "teal",
    color: (isDarkTheme) => (isDarkTheme ? "#E1F5FE" : "#11284f"),
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    fontSize: "1.5rem",
    letterSpacing: ".2rem",
    textAlign: "center",
    fontFamily: "Raleway,sans-serif",
    fontWeight: "700",
    textShadow: (isDarkTheme) =>
      isDarkTheme ? "none" : `0 0 18px rgba(0, 0, 0, 0.35)`,
    "@media only screen and (max-width: 414px)": {
      "@media only screen and (max-width:414px)": {
        fontSize: "1.3rem",
      },
    },
  },
  eduTimeline: {
    // backgroundColor: "seagreen",
    width: "70%",
    margin: "1rem auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    "@media only screen and (max-width:300px)": {
      width: "100%",
    },
  },

  lastSection: {
    // backgroundColor: "blue",
    display: "flex",
    "&>div": {
      flexBasis: "50%",
    },
    margin: "5rem auto",
    width: "95%",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  skillsContainer: {
    // backgroundColor: "orange",
    //heading
    "&>div:first-child": {
      // backgroundColor: "red",
      margin: "0 auto",
      width: "80%",
    },
  },
  skills: {
    // backgroundColor: "pink",
    margin: "2rem auto",
    width: "80%",
  },
  servicesContainer: {
    // backgroundColor: "pink",
    //heading
    "&>div:first-child": {
      // backgroundColor: "red",
      margin: "0 auto",
      width: "80%",
    },
  },
  services: {
    // backgroundColor: "green",
    height: "100%",
    margin: " auto",
  },
  contact: {
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "0.08rem",
    fontSize: "0.7rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.6rem",
      letterSpacing: "0.1rem",
    },
    "&>a": {
      color: (isDarkTheme) => (isDarkTheme ? "#E1F5FE" : "#11284f"),
      textDecoration: "none",
      paddingBottom: "0.3rem",
      transition: "all 0.2s ease-in",
      borderBottom: "1px solid transparent",
      "&:hover": {
        borderBottom: (isDarkTheme) =>
          `1px solid ${isDarkTheme ? `#4FC3F7` : `#01579B`}`,
        color: (isDarkTheme) => (isDarkTheme ? "#4FC3F7" : "#01579B"),
      },
    },
  },
}));

export default styles;
