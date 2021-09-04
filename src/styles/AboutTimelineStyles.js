import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  paper: {
    background: "none",
    // backgroundColor: "orange",
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
      textShadow: (isDarkTheme) =>
        isDarkTheme ? "none" : `0 0 18px rgba(0, 0, 0, 0.35)`,
      margin: "auto",
      flexBasis: "30%",
      fontSize: "2rem",
      color: (isDarkTheme) => (isDarkTheme ? "#4FC3F7" : "#01579B"),
      fontWeight: "800",
      letterSpacing: "0.2rem",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "1rem",
        marginLeft: 0,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.8rem",
      },
    },
  },
  eduContent: {
    color: (isDarkTheme) => (isDarkTheme ? "#ccd6f6" : "#233554"),
    // backgroundColor: "azure",
    flexBasis: "70%",
    marginLeft: "2rem",
    display: "flex",
    textAlign: "left",
    fontWeight: "700",
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
      color: (isDarkTheme) => (isDarkTheme ? "#fcfcfc" : "#111211"),
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.85rem",
      },
    },
    //content
    "&>div:nth-of-type(2)": {
      // backgroundColor: "teal",
      margin: "0.7rem 0",
      fontSize: "0.7rem",
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.6rem",
      },
      "&>div:first-child": {
        marginBottom: "0.2rem",
      },
    },
  },
  dot: {
    borderColor: (isDarkTheme) => (isDarkTheme ? "#0091EA" : "#01578c"),
  },
  oddItem: {
    marginRight: "1.7rem",
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
}));
export default styles;
