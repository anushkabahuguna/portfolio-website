import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  "@keyframes left-anim ": {
    " 0%": {
      opacity: 0,
      transform: `translateX(-40%)`,
    },
    "100%": {
      opacity: 1,
      transform: `translateX(0%)`,
    },
  },
  root: {
    fontFamily: "Roboto ,sans-serif",
    // backgroundColor: "none",
    margin: "6rem auto",
    color: (isDarkTheme) => (isDarkTheme ? "#ccd6f6" : "#233554"),
    height: "85%",
    overflowX: "hidden",
    overflowY: "auto",
  },
  container: {
    // backgroundColor: "#ef1234",
    width: "80%",

    height: "100%",
    margin: "0 auto",
    display: "flex",
    "&>div": {
      flexBasis: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  headingContainer: {
    // backgroundColor: "blue",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "2rem",
    animation: "left-anim 1s",
  },
  headings: {
    fontSize: "5rem",
    alignSelf: "flex-start",
    marginLeft: "5rem",
    color: (isDarkTheme) => (isDarkTheme ? "#81D4FA" : "#01579B"),
    fontFamily: "Work Sans, sans-serif",
    "&>div": {
      // textDecoration: "underline",
      paddingBottom: "1.2rem",
      borderBottom: (isDarkTheme) =>
        `10px solid ${isDarkTheme ? `#81D4FA` : "#01579B"}`,
      // backgroundColor: "black",
      // textUnderlineOffset: "3px",
      margin: "4rem 0",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "4rem",
      marginLeft: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      fontSize: "5rem",
    },
  },
  content: {
    // backgroundColor: "pink",
  },
  icons: {
    // backgroundColor: "orange",
    alignSelf: "flex-start",
    marginLeft: "5rem",

    "& a": {
      color: (isDarkTheme) => (isDarkTheme ? "#ccd6f6" : "#233554"),

      padding: " 0.4rem 1rem",
      transition: "all 0.2s ease-in",
      border: "2px dashed transparent",
      "&:focus": {
        border: (isDarkTheme) =>
          `2px dashed ${isDarkTheme ? `#29B6F6` : `#0288D1`}`,
      },
    },
    "&>div": {
      display: "flex",
      gap: "2rem",
      marginBottom: "1rem",
    },

    [theme.breakpoints.down("md")]: {
      marginLeft: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
    },
  },
  icon: {
    "&>svg": {
      width: "1.3rem",
      transition: "all 0.3s ease-in",
      "&:hover": {
        color: (isDarkTheme) => (isDarkTheme ? "#4FC3F7" : "#0288D1"),
      },
    },
  },
  form: {
    // backgroundColor: "orange",
    margin: "6rem 0",
    "& >*": {
      margin: "2rem 0",
      padding: "0.5rem 0.5rem",
      backgroundColor: (isDarkTheme) => (isDarkTheme ? "#fcfcfc" : "#F5F5F5"),
    },
    "& >div:nth-of-type(2)": {
      marginTop: "1rem",
    },
  },
  select: {
    borderBottom: "3px solid black",
    padding: "0.5rem 0.5rem",

    height: "100%",
    color: "black",
    width: "100%",
    "&>div:nth-of-type(1)": {
      height: "100%",
      background: "none",
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    "& svg": {
      color: "black",
    },
  },
  submit: {
    border: "none",
    textTransform: "uppercase",
    cursor: "pointer",
    padding: "1rem 1.2rem",
    outline: "none",
    backgroundColor: "#81D4FA",
    fontWeight: "700",
    letterSpacing: "0.1rem",
    transition: "all 0.2s ease-in",
    fontSize: "0.75rem",
    "&:hover": {
      color: (isDarkTheme) => (isDarkTheme ? "black" : "#E1F5FE"),
      backgroundColor: (isDarkTheme) => (isDarkTheme ? "#29B6F6" : "#0288D1"),
    },
  },
  iconLabel: {
    // backgroundColor: "red",
    margin: "auto 0",
    fontSize: "0.8rem",
    letterSpacing: "0.09rem",
  },
  snackbar: {
    background: "none",
  },
}));

export default styles;
