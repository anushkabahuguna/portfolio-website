const styles = (theme) => ({
  "@keyframes myEffect": {
    "0%": {
      top: "0",
      width: "50vw",
    },
    "100%": {
      top: "100%",
      display: "none",
    },
  },
  "@keyframes myEffect2": {
    "0%": {
      top: "0",
      width: "50vw",
    },
    "100%": {
      top: "-100%",

      display: "none",
    },
  },
  "@keyframes myEffect3": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  "@keyframes headingEffect": {
    "0%": {
      opacity: 0,

      transform: `translateZ(-300px) translateY(-200px)`,
    },
    "40%": {
      opacity: 0.6,
    },
    "100%": {
      opacity: 1,
      filter: `blur(0)`,
    },
  },
  root: {
    height: "100vh",
    overflowY: "auto",
    overflowX: "hidden",
    fontFamily: `'Poppins', sans-serif`,
  },
  overlay: {
    "& div": {
      position: "fixed",
      zIndex: "10",
      top: "100%",
      width: "50vw",
      height: "100vh",
    },
    "& div:nth-of-type(1)": {
      background: `url(https://images.unsplash.com/photo-1515387784663-e2e29a23f69e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80)`,
      animation: `$myEffect 3s ease-in-out`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
    "& div:nth-of-type(2)": {
      background:
        "url(https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
      transform: "translateX(100%)",
      // backgroundColor: "orange",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      animation: `$myEffect2 3s ease-in-out`,
    },
  },
  container: {
    color: "white",
    transform: "translateY(10rem)",
    margin: "0 auto ",
    animation: `$myEffect3  3s  ease-in-out`,

    fontSize: "1.1rem",
    width: "60%",
    height: "70%",

    // backgroundColor: "orange",
  },
  title: {
    fontSize: "3.5rem",
    color: "#4FC3F7",
    letterSpacing: "0.2rem",
    animation: "$headingEffect 1s",
    opacity: 1,
  },
  description: {
    // backgroundColor: "red",
    width: "100%",
    fontSize: "0.9rem",
    marginTop: "2rem",
    lineHeight: "1.5rem",
    letterSpacing: "0.09rem",

    "& p ": {
      margin: "1rem auto",
    },
  },
  divider: {
    backgroundColor: "white",
  },
  details: {
    marginTop: "3rem",
    marginBottom: "4rem",
    letterSpacing: "0.07rem",
    "&>div": {
      display: "flex",
      // backgroundColor: "grey",
      padding: "2rem 0",
      [theme.breakpoints.down("lg")]: {
        // fontSize: "1rem",
        // backgroundColor: "pink",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "0.9rem",
        // backgroundColor: "orange",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      },
      //   small headings
      "&>div:nth-of-type(1)": {
        // backgroundColor: "red",
        minWidth: "9rem",
        color: "#4FC3F7",
        fontSize: "1.1rem",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "0.15rem",
        margin: "auto 0",
      },
      "&>div:nth-of-type(2)": {
        // backgroundColor: "blue",

        minWidth: "9rem",
        fontSize: "0.8rem",
        display: "flex",
        margin: "auto 2rem",
        [theme.breakpoints.down("md")]: {
          margin: "0",
        },
      },
    },
  },
  tags: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "1rem",
    },
    "&>div": {
      marginRight: "3rem",
      backgroundColor: "white",
      color: "black",
      whiteSpace: "nowrap",
      borderRadius: "28px",
      padding: "5px 15px",
    },
  },
  icon: {
    color: "white",
    // backgroundColor: "#123ef5",
    padding: " 0 1em",
    transition: "all 0.3s ease-in",
    "&:hover": {
      color: "#4FC3F7",
    },
  },
  images: {
    // backgroundColor: "red",
  },
  imageHolder: {
    overflow: "hidden",
    "& img": {
      maxWidth: "100%",
      height: "auto",
      margin: "0 0 2rem 0",
    },
  },
});

export default styles;
