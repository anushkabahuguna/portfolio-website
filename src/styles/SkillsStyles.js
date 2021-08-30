const styles = {
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
    color: "white",
    margin: " auto 0",

    // bar color
    "&>div:first-child": {
      backgroundColor: "#4FC3F7",
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
    color: "#ccd6f6",

    textAlign: "right",
    fontWeight: "600",
  },
};
export default styles;
