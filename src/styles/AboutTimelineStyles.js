const styles = (theme) => ({
  paper: {
    background: "none",
    // backgroundColor: "orange",
    // position: "absolute",
    top: 0,
    display: "flex",
    // textAlign:'left',
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },

    //year heading
    "&>div:first-child": {
      // backgroundColor: "beige",
      margin: "auto",

      flexBasis: "30%",
      fontSize: "2rem",
      color: "#03A9F4",
      fontWeight: "600",
      letterSpacing: "0.2rem",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "1rem",
        marginLeft: 0,
      },
    },
  },
  eduContent: {
    color: "#ccd6f6",
    // backgroundColor: "azure",
    flexBasis: "70%",
    marginLeft: "2rem",
    display: "flex",
    textAlign: "left",
    flexDirection: "column",
    // whiteSpace: "nowrap",
    letterSpacing: "0.07rem",

    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
    },

    // degree name
    "&>div:first-child": {
      // backgroundColor: "brown",
      fontSize: "1rem",
      color: "white",
    },
    //content
    "&>div:nth-of-type(2)": {
      // backgroundColor: "teal",

      margin: "0.7rem 0",
      fontSize: "0.7rem",
      "&>div:first-child": {
        marginBottom: "0.2rem",
      },
    },
  },
  dot: {
    borderColor: "#0091EA",
  },
  oddItem: {
    marginRight: "2rem",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0",
    },

    // heading
    "&>div:first-child": {
      flexBasis: "70%",
      marginLeft: "5rem",
      [theme.breakpoints.down("md")]: {
        marginLeft: 0,
      },
      [theme.breakpoints.down("sm")]: {
        marginRight: "0",
      },
    },
  },
});
export default styles;
