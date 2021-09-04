const styles = () => ({
  root: {
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
    transition: "all 0.3s ease",
    "&:hover >div:first-child ": {
      height: "100%",
      transform: "translateY(0%)",
      backdropFilter: "blur(4px)",
    },
    "@media only screen and (max-width: 1651px)": {
      height: "300px",
    },
    "@media only screen and (max-width: 953px)": {
      height: "380px",
    },
    "@media only screen and (max-width: 605px)": {
      height: "260px",
    },
    "@media only screen and (max-width: 480px)": {
      height: "230px",
    },
    "@media only screen and (max-width: 406px)": {
      height: "190px",
    },
    "@media only screen and (max-width: 320px)": {
      height: "150px",
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
      "@media only screen and (max-width: 1334px)": {
        fontSize: "1.2rem",
      },
      "@media only screen and (max-width: 887px)": {
        fontSize: "1.6rem",
      },
      "@media only screen and (max-width: 605px)": {
        fontSize: "1.3rem",
      },
      "@media only screen and (max-width: 360px)": {
        fontSize: "1.2rem",
      },
      "@media only screen and (max-width: 320px)": {
        fontSize: "1rem",
      },
    },
    // summary
    "&>div:nth-child(1)>div": {
      fontFamily: `'STIX Two Text', serif`,
      //   backgroundColor: "red",
      fontSize: "0.95rem",
      letterSpacing: "0.03rem",
      fontStyle: "italic",
      "@media only screen and (max-width: 414px)": {
        fontSize: "0.85rem",
      },
      "@media only screen and (max-width: 375px)": {
        fontSize: "0.7rem",
      },
      "@media only screen and (max-width: 360px)": {
        fontSize: "0.6rem",
      },
      "@media only screen and (max-width: 280px)": {
        fontSize: "0.5rem",
      },
    },
  },
  btn: {
    cursor: "pointer",
    border: "2px solid rgba(255,255,255,1)",
    fontSize: "0.8rem",
    letterSpacing: "0.1rem",
    "@media only screen and (max-width: 1024px)": {
      fontSize: "0.7rem",
    },
    "@media only screen and (max-width: 414px)": {
      fontSize: "0.5rem",
    },
    "@media only screen and (max-width: 375px)": {
      marginTop: "0.8rem",
    },
    "@media only screen and (max-width: 360px)": {
      fontSize: "0.6rem",
      marginTop: "1rem",
    },
    "@media only screen and (max-width: 320px)": {
      fontSize: "0.4rem",
    },
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
      "@media only screen and (max-width: 1440px)": {
        padding: "0.4rem 1.3rem",
      },
      "@media only screen and (max-width: 414px)": {
        padding: "0.3rem 1.2rem",
      },
      "@media only screen and (max-width: 360px)": {
        padding: "0.2rem 1.1rem",
      },
      "@media only screen and (max-width: 280px)": {
        padding: "0.1rem 0.8rem",
      },
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
