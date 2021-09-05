import React, { useRef } from "react";
import { useTheme, ThemeProvider } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import AboutTimeline from "./AboutTimeline";
import Skills from "./Skills";
import Services from "./Services";
import { useStore } from "./contexts/theme.context";
import useOnScreen from "./utils/useOnScreen";
import styles from "./styles/AboutStyles";
import "./About.css";
import myImage from "./assests/images/myImage.jpg";
import resume from "./data/resume.pdf";

function About({ services }) {
  const { isDarkTheme } = useStore();
  const classes = styles(isDarkTheme);
  const theme = useTheme();
  const eduRef = useRef(0);
  const setAnimation = () => {
    eduRef.current.classList.add(`animation1`);
  };
  const onEduScreen = useOnScreen(eduRef);
  let spring = useSpring({
    to: {
      opacity: 1,
      letterSpacing: "0.09em",
    },
    from: { opacity: 0, letterSpacing: "0.5em" },
    reset: false,
    reverse: false,
    delay: 200,
    config: { frequency: 2 },
  });
  let spring2 = useSpring({
    to: {
      opacity: 1,
      transform: "translateY(0px)",
    },
    from: { opacity: 0, transform: "translateY(100px)" },
    reset: false,
    reverse: false,
    delay: 200,
    config: { frequency: 1 },
  });
  let photoSpring = useSpring({
    to: {
      opacity: 1,
      transform: "scale(1)",
    },
    from: { opacity: 0, transform: "scale(0.8)" },
    reset: false,
    reverse: false,
    delay: 200,
    config: { frequency: 1 },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.topContent}>
            <animated.div className={classes.imageHolder} style={photoSpring}>
              <img alt="profile img" src={myImage} />
            </animated.div>
            <div className={classes.summaryBox}>
              <animated.div className={classes.topHeading} style={spring}>
                About Me
              </animated.div>
              <animated.div className={classes.summaryContent} style={spring2}>
                <div>
                  Hello, my name is Anushka Bahuguna. I live in Dehradun,
                  Uttarakhand. I am currently pursuing B.Sc. (Hons.) in Computer
                  Science at Hansraj College (Delhi University). I am passionate
                  about web and graphic designing.
                </div>
                <div>
                  In my spare time, I enjoy doing photography and reading
                  novels.
                </div>
                <a
                  href={resume}
                  className={classes.download}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Download Resume
                </a>
              </animated.div>
            </div>
          </div>
          <div className={classes.eduContainer}>
            <div className="heading" ref={eduRef}>
              {onEduScreen && setAnimation()}
              <div className={`${classes.eduHeading}`}>
                {onEduScreen && "Education"}
              </div>
            </div>
            <div className={classes.eduTimeline}>
              <AboutTimeline />
            </div>
          </div>
          <div className={classes.lastSection}>
            <div className={classes.skillsContainer}>
              <div className={classes.eduHeading}>Skills</div>
              <div className={classes.skills}>
                <Skills />
              </div>
            </div>
            <div className={classes.servicesContainer}>
              <div className={classes.eduHeading}>Services</div>
              <div className={classes.services}>
                <Services services={services} />
              </div>
            </div>
          </div>
          <div className={classes.contact}>
            <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact me</Link>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default About;
