import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(() => ({
  root: {
    // backgroundColor: "#fcfcfc",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  singleBox: {
    // backgroundColor: "red",
    margin: "1rem 0",
    display: "flex",
    flexDirection: "column",
  },
  progress: {
    // backgroundColor: "orange",
    background: "none",
    height: "10px",
    borderRadius: "10px",
    margin: " auto 0",

    // bar color
    "&>div:first-child": {
      backgroundColor: (isDarkTheme) => (isDarkTheme ? "#4FC3F7" : "#01579B"),
      borderRadius: "10px",
    },
  },
  texts: {
    // backgroundColor: "orchid",
    display: "flex",
    justifyContent: "space-between",
    margin: "0.5rem 0",
  },
  txt: {
    // backgroundColor: "yellow",
    color: (isDarkTheme) => (isDarkTheme ? "#ccd6f6" : "#233554"),

    textAlign: "right",
    fontWeight: "600",
  },
}));
export default styles;
