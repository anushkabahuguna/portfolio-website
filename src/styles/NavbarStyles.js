const styles = (theme) => ({
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
      backgroundColor: "#ccd6f6",
      borderRadius: `100px`,
      backgroundClip: `content-box`,
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(30%)",
    },
    "60%": {
      opacity: "12%",
    },
    "100%": {
      opacity: 1,
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
    color: "white",
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontFamily: "Roboto,sans-serif",
    fontWeight: "100",
  },
  paper: {
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: theme.spacing(2, 4, 3),
    width: "40%",
    margin: "auto auto",
    height: "500px",
    transform: "translateY(40%)",
  },
  cOverlay: {
    position: "absolute",
    zIndex: "0",
    width: "100%",

    height: "100vh",
    backgroundColor: "#E1F5FE",
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
    color: "black",
  },
  links: {
    // backgroundColor: "blue",
    animation: `$myEffect 2s ease-in-out`,

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
      transform: "translateX(60%)",
      color: "#1d1c1f",
      "&:hover": {
        borderBottom: "2px solid #1d1c1f",
      },
      [theme.breakpoints.down("xs")]: {
        transform: "translateX(0%)",
        fontSize: "3rem",
      },
    },
    "& a:nth-of-type(odd)": {
      transform: "translateX(-60%)",
      color: "#1d1c1f",
      "&:hover": {
        borderBottom: "2px solid #1d1c1f",
      },
      [theme.breakpoints.down("xs")]: {
        transform: "translateX(0%)",
        fontSize: "3rem",
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
    color: "#1d1c1f",
    cursor: "pointer",
    "&:hover": {
      color: "#01579B",
    },
    [theme.breakpoints.down("xs")]: {
      transform: "translateX(0%)",
      fontSize: "2rem",
      marginTop: "3rem",
    },
  },
});

export default styles;
