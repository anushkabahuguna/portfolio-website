const styles = (theme) => ({
  "@keyframes increaseWidth": {
    "0%": {
      opacity: 0,
      transform: "scaleX(0)",
    },
    "100%": {
      opacity: 1,
      transform: "scaleX(1)",
    },
  },
  "@keyframes changeOpacity": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  "@keyframes linkAnim": {
    "0%": {
      opacity: 0,
      transform: `translateY(60px) `,
      transformOrigin: `50% 100%`,
      filter: "blur(30px)",
    },
    "100%": {
      opacity: 1,
      transform: `translateY(0) `,
      transformOrigin: `50% 50%`,
      filter: "blur(0)",
    },
  },
  root: {
    color: "#fcfcfc",
    backgroundColor: "red",
    fontFamily: "Poppins,sans-serif",
    // navbar has zindex of 1100
    zIndex: 1000,
    margin: "auto",
  },
  content: {
    // backgroundColor: "pink",
    textAlign: "center",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    position: `absolute`,
    left: 0,
    right: 0,
    margin: `auto `,
    // height: "50%",
    top: "35%",

    opacity: 1,
    width: `fit-content` /* Need a specific value to work */,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
    "@media only screen and (max-width: 360px)": {
      top: "25%",
    },
  },
  topHeadings: {
    // backgroundColor: "pink",

    "&::before": {
      content: "''",
      display: `block`,
      opacity: 1,
      animation: "$increaseWidth 2s",
      width: `100%`,
      height: `3px`,
      background: `#ccd6f6`,
      left: `0px`,
      top: `0%`,
      transform: "scaleX(1)",
      position: `absolute`,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
    "@media only screen and (max-width: 455px)": {
      fontSize: "0.6rem",
    },
  },
  heading: {
    letterSpacing: "0.3rem",
    textTransform: `uppercase`,
    animation: "$changeOpacity 3s",
    whiteSpace: "no-wrap",
    "@media only screen and (max-width: 455px)": {
      marginBottom: "2rem",
      marginTop: "1.7rem",
    },
  },
  des: {
    fontWeight: "300",
    letterSpacing: "0.1rem",
    fontSize: "1rem",
    animation: "$changeOpacity 3s",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
    "&::after": {
      content: "''",
      display: `block`,
      width: `100%`,
      height: `3px`,
      background: `#ccd6f6`,
      left: `0px`,
      // change this bottm when marginTop changes of links
      bottom: `45%`,
      position: `absolute`,
      animation: "$increaseWidth 2s",
      [theme.breakpoints.down("xs")]: {
        bottom: "65%",
      },
      "@media only screen and (max-width: 455px)": {
        bottom: "55%",
      },
    },
  },
  links: {
    // backgroundColor: "red",
    display: "flex",
    marginTop: "5rem",
    justifyContent: "space-around",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
    fontSize: "0.8rem",
    fontWeight: "500",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
    "&>a": {
      textDecoration: "none",
      border: "1px solid #81D4FA",
      transition: "all 0.3s ease-out",
      animation: "$linkAnim 2s",
      color: "#ccd6f6",
      "&:hover,focus": {
        boxShadow: `inset 13em 0 0 0 #81D4FA`,
        cursor: "pointer",
        color: "black",
      },

      padding: "0.4rem 1.7rem",
    },
  },
});
export default styles;
