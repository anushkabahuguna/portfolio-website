const styles = (theme) => ({
  root: {
    color: "white",
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

      border: "2px solid #03A9F4",
      transition: "all 0.3s ease-in",
      borderRadius: "50%",
      boxShadow: "4px 7px 5px 0px rgba(0,0,0,1)",
      [theme.breakpoints.down("md")]: {
        width: "200px",
        // backgroundColor: "blue",
      },
      [theme.breakpoints.down("sm")]: {
        // backgroundColor: "coral",
        margin: 0,
      },
    },
  },
  summaryBox: {
    // backgroundColor: "blue",
    // flexBasis: "70%",
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

    letterSpacing: ".1rem",
    fontFamily: "Raleway,sans-serif",
    fontWeight: "600",
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "pink",
      fontSize: "2rem",
    },
    "&:after": {
      content: '""',
      display: "block",
      position: "relative",
      top: "-26px",
      left: "10rem",
      width: "200px",
      height: "1px",
      marginLeft: "100px",
      backgroundColor: "#ccd6f6",
      boxSizing: "inherit",
      [theme.breakpoints.down("md")]: {
        // backgroundColor: "pink",
        left: "6rem",
        top: "-21px",
        width: "150px",
      },
    },
  },
  summaryContent: {
    // backgroundColor: "hotpink",
    marginTop: "2rem",
    fontSize: "1rem",
    letterSpacing: ".06rem",
    wordSpacing: "0.2rem",
    color: "#ccd6f6",
    lineHeight: "1.8rem",
    "&>div:first-child": {
      // backgroundColor: "red",
    },
    "&>div": {
      marginBottom: "2rem",
    },
  },
  download: {
    color: "#0a192f",
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

    backgroundColor: "#4FC3F7",
    border: "1px solid #4FC3F7",
    textDecoration: "none",

    transition: "all 0.3s",
    "&:hover": {
      color: " #4FC3F7",
      border: "1px solid #4FC3F7",
      transition: " all 0.3s",
      background: "none",
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
    color: "#E1F5FE",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    fontSize: "1.5rem",
    letterSpacing: ".2rem",
    textAlign: "center",
    fontFamily: "Raleway,sans-serif",
    fontWeight: "700",
  },
  eduTimeline: {
    // backgroundColor: "seagreen",
    width: "70%",

    margin: "1rem auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
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
    "&>a": {
      color: "#E1F5FE",
      textDecoration: "none",
      paddingBottom: "0.3rem",
      transition: "all 0.2s ease-in",
      borderBottom: "1px solid transparent",
      "&:hover": {
        borderBottom: "1px solid #4FC3F7",
        color: "#4FC3F7",
      },
    },
  },
});

export default styles;
