const styles = (theme) => ({
  root: {
    // boxShadow: (isDarkTheme) =>
    // isDarkTheme
    //   ? "4px 7px 5px 0px rgba(0,0,0,1)"
    //   : "4px 5px 5px 0px rgba(0,0,0,0.3)",
    boxShadow: "4px 4px 12px 0px rgba(0,0,0,0.5)",
    backgroundColor: "#111",
    display: "flex",
    height: "343px",
    justifyContent: "center",
    alignItems: "center",
    horizontalAlign: "center",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    "&:hover >div:first-child ": {
      height: "100%",
      transform: "translateY(0%)",
      backdropFilter: "blur(4px)",
    },
  },

  overlay: {
    backgroundColor: " rgba(52, 74, 92, 0.5)",
    color: "#fcfcfc",
    width: "100%",
    boxSizing: "border-box",
    transition: "transform .3s ease",
    height: "100%",
    transform: "translateY(110%)",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    //name of project
    "& h3": {
      marginBottom: "1.3rem",
      textTransform: "uppercase",
      letterSpacing: "0.1rem",
      fontSize: "1.5rem",
    },
    // summary
    "&>div:nth-child(1)>div": {
      fontFamily: `'STIX Two Text', serif`,
      //   backgroundColor: "red",
      fontSize: "0.95rem",
      letterSpacing: "0.03rem",
      fontStyle: "italic",
    },
  },
  btn: {
    cursor: "pointer",
    border: "2px solid rgba(255,255,255,1)",
    fontSize: "0.8rem",
    letterSpacing: "0.1rem",

    fontWeight: "700",
    boxShadow: `8px 8px 0px -1px rgba(255,255,255,1)`,
    textAlign: "center",
    outline: "none",
    marginTop: "2rem",
    transition: "all .3s ease-in-out",
    "& a": {
      textDecoration: "none",
      color: "#fcfcfc",
      height: "100%",
      display: "inline-block",
      padding: "0.5rem 1.4rem",
      textTransform: "uppercase",
    },
    "&:hover": {
      textDecoration: "none",
      boxShadow: "none",
      backgroundColor: "#fcfcfc",
    },
    "&:hover a": {
      color: "black",
    },
  },
});

export default styles;
