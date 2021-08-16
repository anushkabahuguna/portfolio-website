import React from "react";
import AboutTimeline from "./AboutTimeline";
import { withStyles } from "@material-ui/core/styles";
import Skills from "./Skills";
import Services from "./Services";
import { Link } from "react-router-dom";
import myImage from "./assests/images/myImage.jpg";
import resume from "./data/resume.pdf";
import styles from "./styles/AboutStyles";

function About({ classes, services }) {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.topContent}>
          <div className={classes.imageHolder}>
            <img alt="profile img" src={myImage} />
          </div>
          <div className={classes.summaryBox}>
            <div className={classes.topHeading}>About Me</div>
            <div className={classes.summaryContent}>
              <div>
                Hello, my name is Anushka Bahuguna. I live in Dehradun,
                Uttarakhand. I am currently pursuing B.Sc. (Hons.) in Computer
                Science at Hansraj College (Delhi University). I am passionate
                about web and graphic designing.
              </div>
              <div>
                In my spare time, I enjoy doing photography and reading novels.
              </div>
              <a href={resume} className={classes.download} download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className={classes.eduContainer}>
          <div className={classes.eduHeading}>Education</div>
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
          <Link to="/contact">Contact me</Link>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(About);
