import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  "@keyframes increaseWidth": {
    "0%": {
      opacity: 0,
      transform: "scaleX(0)",
    },
    "100%": {
      opacity: 1,
      transform: "scaleX(1)",
    },
  },
  "@keyframes changeOpacity": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  "@keyframes linkAnim": {
    "0%": {
      opacity: 0,
      transform: `translateY(60px) `,
      transformOrigin: `50% 100%`,
      filter: "blur(30px)",
    },
    "100%": {
      opacity: 1,
      transform: `translateY(0) `,
      transformOrigin: `50% 50%`,
      filter: "blur(0)",
    },
  },
  root: {
    color: (isDarkTheme) => (isDarkTheme ? "#fcfcfc" : "#111211"),
    // backgroundColor: "red",
    fontFamily: "Poppins,sans-serif",
    // navbar has zindex of 1100
    zIndex: 1000,
    margin: "auto",
  },
  content: {
    // backgroundColor: "pink",
    textAlign: "center",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    position: `absolute`,
    left: 0,
    right: 0,
    margin: `auto `,
    top: "35%",
    opacity: 1,
    width: `fit-content`,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
    "@media only screen and (max-width: 414px)": {
      top: "25%",
    },
  },
  topHeadings: {
    // backgroundColor: "pink",
    "&::before": {
      content: "''",
      display: `block`,
      opacity: 1,
      animation: "$increaseWidth 2s",
      width: `100%`,
      height: `3px`,
      backgroundColor: (isDarkTheme) => (isDarkTheme ? "#ccd6f6" : "#233554"),
      left: `0px`,
      top: `0%`,
      transform: "scaleX(1)",
      position: `absolute`,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
    "@media only screen and (max-width: 455px)": {
      fontSize: "0.6rem",
    },
  },
  heading: {
    letterSpacing: "0.3rem",
    textTransform: `uppercase`,
    animation: "$changeOpacity 3s",
    "@media only screen and (max-width: 455px)": {
      marginBottom: "2rem",
      marginTop: "1.7rem",
    },
    "@media only screen and (max-width:337px)": {
      fontSize: "1rem",
      marginTop: "0rem",
      marginBottom: "2.3rem",
    },
  },
  des: {
    fontWeight: "300",
    letterSpacing: "0.1rem",
    fontSize: "1rem",
    animation: "$changeOpacity 3s",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
    "@media only screen and (max-width:337px)": {
      fontSize: "0.6rem",
    },
    "&::after": {
      content: "''",
      display: `block`,
      width: `100%`,
      height: `3px`,
      backgroundColor: (isDarkTheme) => (isDarkTheme ? "#ccd6f6" : "#233554"),
      left: `0px`,
      // change this bottom when marginTop(links) changes
      bottom: `45%`,
      position: `absolute`,
      animation: "$increaseWidth 2s",
      [theme.breakpoints.down("xs")]: {
        bottom: "65%",
      },
      "@media only screen and (max-width: 455px)": {
        bottom: "55%",
      },
    },
  },
  links: {
    // backgroundColor: "red",
    display: "flex",
    marginTop: "5rem",
    justifyContent: "space-around",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
    fontSize: "0.8rem",
    fontWeight: "500",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
    "@media only screen and (max-width:337px)": {
      marginTop: "3.9rem",
      gap: "1rem",
    },
    "&>a": {
      textDecoration: "none",
      border: (isDarkTheme) =>
        `1px solid ${isDarkTheme ? `#81D4FA` : `#01579B`}`,
      transition: "all 0.3s ease-out",
      animation: "$linkAnim 2s",
      color: (isDarkTheme) => (isDarkTheme ? "#ccd6f6" : "#233554"),
      "&:hover,focus": {
        boxShadow: (isDarkTheme) =>
          `inset 13em 0 0 0 ${isDarkTheme ? `#81D4FA` : `#01579B`}`,
        cursor: "pointer",
        color: (isDarkTheme) => (isDarkTheme ? "#111211" : "#fcfcfc"),
      },
      padding: "0.4rem 1.7rem",
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.7rem",
        padding: "0.4rem 1.3rem",
      },
    },
  },
}));
export default styles;
