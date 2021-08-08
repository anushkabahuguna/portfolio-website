const styles = (theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "20px",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      backgroundColor: "#e4e4e4",
      borderRadius: `100px`,
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#8070d4",
      borderRadius: `100px`,
      border: "5px solid transparent",
      backgroundClip: `content-box`,
    },
  },
  root: {
    flexGrow: 1,
    width: "100vw",
  },
  bar: {
    boxShadow: "none",
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
  copyOverlay: {
    zIndex: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    transition: "transform 0.6s ease-in-out",
    transform: ` rotate(24deg) skew(-15deg) translate(-100%,0px)`,
  },
  showOverlay: {
    transition: "all 0.6s ease-in-out",
    transform: ` rotate(0deg) skew(0deg) translate(0%,0px)`,
    zIndex: "10",
    position: "absolute",
  },
  copyMsg: {
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

        margin: "0 1rem",
      },
      [theme.breakpoints.down("md")]: {
        // backgroundColor: theme.palette.secondary.main,
        fontSize: "5rem",
        margin: "0 2rem",
      },
      [theme.breakpoints.down("sm")]: {
        // backgroundColor: "yellow",
        fontSize: "3rem",
        margin: "0 3rem",
      },
      [theme.breakpoints.down("xs")]: {
        transform: "translateX(0%)",
        fontSize: "3rem",
        margin: "2rem 0",
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
    transition: "transform 0.5s ease-in-out,opacity 1.5s ease-in-out",
    transitionDelay: "0.3s",
  },
  cancelIcon: {
    position: "fixed",
    top: 0,
    right: 0,
    marginTop: "1rem",
    marginRight: "3rem",
    fontSize: "3rem",
    color: "#1d1c1f",
    cursor: "pointer",
    "&:hover": {
      color: "#f0b429",
    },
    [theme.breakpoints.down("xs")]: {
      transform: "translateX(0%)",
      fontSize: "2rem",
      marginTop: "3rem",
    },
  },
});

export default styles;
