import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  "@global": {
    scrollBehavior: "smooth",
    "*::-webkit-scrollbar": {
      width: "8px",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      background: "none",
      borderRadius: `100px`,
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: (isDarkTheme) => (isDarkTheme ? "#ccd6f6" : "#8892b0"),
      borderRadius: `100px`,
      backgroundClip: `content-box`,
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
    },
    "60%": {
      opacity: "12%",
    },
    "100%": {
      opacity: 1,
    },
  },
  "@keyframes myEffecteven": {
    "0%": {
      opacity: 0,
      transform: "translateX(130%)",
    },
    "60%": {
      opacity: "12%",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(60%)",
    },
  },
  "@keyframes myEffecteven-s": {
    "0%": {
      opacity: 0,
      transform: "translateX(130%)",
    },
    "60%": {
      opacity: "12%",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0%)",
    },
  },
  "@keyframes myEffectodd": {
    "0%": {
      opacity: 0,
      transform: "translateX(-130%)",
    },
    "60%": {
      opacity: "12%",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(-60%)",
    },
  },
  "@keyframes myEffectodd-s": {
    "0%": {
      opacity: 0,
      transform: "translateX(-130%)",
    },
    "60%": {
      opacity: "12%",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0%)",
    },
  },
  "@keyframes myEffect2": {
    "0%": {
      transform: "translate(-100%,0%)",
    },
    "100%": {
      transform: "translate(0,0)",
    },
  },
  root: {
    flexGrow: 1,
    width: "100vw",
  },
  bar: {
    boxShadow: "none",
    // backgroundColor: "red",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: (isDarkTheme) => (isDarkTheme ? "#ccd6f6" : "#233554"),
  },
  title: {
    flexGrow: 1,
    color: (isDarkTheme) => (isDarkTheme ? "#fcfcfc" : "#111211"),
    fontFamily: "Roboto,sans-serif",
    fontWeight: "100",
  },

  cOverlay: {
    position: "absolute",
    zIndex: "0",
    width: "100%",

    height: "100vh",
    backgroundColor: (isDarkTheme) => (isDarkTheme ? "#ebeeff" : "#112240"),
    transition: "transform 1s ease-in-out",
    transform: ` rotate(24deg) skew(-15deg) translate(-170%,0px)`,
  },
  showOverlay: {
    // animation: `$myEffect2 2s ease-in-out`,
    transition: "all 1s ease-in-out",
    transform: "translate(0%,0%)",
    zIndex: "10",
    position: "absolute",
  },
  hideOverlay: {},
  cMsg: {
    fontFamily: "Saol Display Regular",
    position: "fixed",
    // backgroundColor: "red",
    left: "0",
    right: "0",
    top: "0",
    zIndex: "-10",
    bottom: "0",
    display: "flex",
    letterSpacing: "0.3rem",
    flexDirection: "column",
    fontSize: "4rem",
    transform: "translateY(50%)",
    opacity: "0",
    color: (isDarkTheme) => (isDarkTheme ? "#fcfcfc" : "#111211"),
  },
  links: {
    // backgroundColor: "blue",

    height: "100%",
    alignItems: "center",
    margin: "5rem 7rem",
    display: "flex",
    padding: 0,
    justifyContent: "center",
    fontSize: "8rem",
    textTransform: "uppercase",
    flexDirection: "column",
    "& a": {
      textDecoration: "none",
      //   backgroundColor: "black",
      borderBottom: "2px solid transparent",
      transition: "margin 0.5s ease-in-out,border 0.3s ease-in",
      "&:hover": {
        marginLeft: "2rem",
      },

      [theme.breakpoints.down("lg")]: {
        fontSize: "6rem",
        "&:hover": {
          marginLeft: "2rem",
        },
        // margin: "0 1rem",
      },
      [theme.breakpoints.down("md")]: {
        // backgroundColor: theme.palette.secondary.main,
        fontSize: "5rem",
        // margin: "0 2rem",
      },
      [theme.breakpoints.down("sm")]: {
        // backgroundColor: "yellow",
        fontSize: "3rem",
        // margin: "0 3rem",
      },
      [theme.breakpoints.down("xs")]: {
        transform: "translateX(0%)",
        fontSize: "3rem",
        // margin: "2rem 0",
      },
    },

    "& a:nth-of-type(even)": {
      //   backgroundColor: "black",
      animation: `$myEffecteven 2s ease-in-out`,
      transform: "translateX(60%)",

      "&:hover": {
        borderBottom: (isDarkTheme) =>
          `2px solid ${isDarkTheme ? `#1d1c1f` : `#fcfcfc`}`,
      },
      [theme.breakpoints.down("xs")]: {
        transform: "translateX(0%)",

        animation: `$myEffecteven-s 2s ease-in-out`,

        fontSize: "3rem",
      },
    },
    "& a:nth-of-type(odd)": {
      transform: "translateX(-60%)",
      animation: `$myEffectodd 2s ease-in-out`,
      color: (isDarkTheme) => (isDarkTheme ? "#1d1c1f" : "#fcfcfc"),
      "&:hover": {
        borderBottom: (isDarkTheme) =>
          `2px solid ${isDarkTheme ? `#1d1c1f` : `#fcfcfc`}`,
      },
      [theme.breakpoints.down("xs")]: {
        transform: "translateX(0%)",
        fontSize: "3rem",
        animation: `$myEffectodd-s 2s ease-in-out`,
      },
    },
  },

  showMessage: {
    opacity: "1",
    transform: "translateY(0%)",
    zIndex: "25",
    transition: "all 1.5s ease-in-out",
    // transitionDelay: "4s",
  },
  cancelIcon: {
    animation: `$myEffect 2s ease-in-out`,

    position: "fixed",
    top: 0,
    right: 0,
    marginTop: "1rem",
    marginRight: "3rem",
    fontSize: "3rem",
    color: (isDarkTheme) => (isDarkTheme ? "#1d1c1f" : "#fcfcfc"),
    cursor: "pointer",
    "&:hover": {
      color: (isDarkTheme) => (isDarkTheme ? "#303F9F" : "#E3F2FD"),
    },
    [theme.breakpoints.down("xs")]: {
      transform: "translateX(0%)",
      fontSize: "2rem",
      marginTop: "3rem",
    },
  },
  theme: {
    marginLeft: "auto",
    "& span": {
      fontSize: "1.1rem",
      letterSpacing: "0.03rem",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  },
}));

export default styles;
