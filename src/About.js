import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import myImage from "./assests/images/myImage.jpg";
import resume from "./data/resume.pdf";
const styles = (theme) => ({
  root: {
    color: "white",
    // backgroundColor: "red",
    margin: "4rem 0",
    height: "90%",
    overflowX: "hidden",
    overflowY: "auto",
  },
  container: {
    // backgroundColor: "grey",

    marginTop: "5rem",
  },
  topContent: {
    // backgroundColor: "pink",
    width: "60%",
    margin: "0 auto",
    display: "flex",
  },
  imageHolder: {
    // backgroundColor: "yellow",

    flexBasis: "30%",
    margin: "auto 0",
    "& img": {
      width: "300px",
      height: "auto",
      margin: "auto",
      borderRadius: "28px",
      boxShadow: "10px 5px 45px -34px rgba(225,245,254,1)",
    },
  },
  summaryBox: {
    // backgroundColor: "blue",
    // flexBasis: "70%",
    width: "45%",
    margin: "auto",
  },
  topHeading: {
    // backgroundColor: "teal",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    fontSize: "2.8rem",
    letterSpacing: ".1rem",
    fontFamily: "Raleway,sans-serif",
    fontWeight: "600",
    "&:after": {
      content: '""',
      display: "block",
      position: "relative",
      top: "-26px",
      left: "10rem",
      width: "200px",
      height: "1px",
      marginLeft: "100px",
      backgroundColor: "#ccd6f6",
      boxSizing: "inherit",
    },
  },
  summaryContent: {
    // backgroundColor: "hotpink",
    marginTop: "2rem",
    fontSize: "1rem",
    letterSpacing: ".06rem",
    wordSpacing: "0.2rem",
    color: "#ccd6f6",
    lineHeight: "1.8rem",
    "&>div:first-child": {
      // backgroundColor: "red",
    },
    "&>div": {
      marginBottom: "2rem",
    },
  },
  download: {
    height: "50px",
    lineHeight: "50px",
    color: "#000000",
    fontSize: "15px",
    fontWeight: "400",
    borderRadius: "0px",
    padding: "0 20px",
    minWidth: "140px",
    outline: "none",
    cursor: "pointer",
    display: "inline-block",
    textAlign: "center",
    textTransform: "capitalize",
    backgroundColor: "#4FC3F7",
    border: "1px solid #4FC3F7",
    textDecoration: "none",

    transition: "all 0.3s",
    "&:hover": {
      color: " #4FC3F7",
      border: "1px solid #4FC3F7",
      transition: " all 0.3s",
      background: "none",
    },
  },
  eduContainer: {
    // backgroundColor: "orchid",
    display: "flex",
    flexDirection: "column",
    marginTop: "5rem",
    textAlign: "center",
  },
  eduHeading: {
    backgroundColor: "teal",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    whiteSpace: "nowrap",
    fontSize: "2rem",
    letterSpacing: ".1rem",
    fontFamily: "Raleway,sans-serif",
    fontWeight: "600",
  },
  eduTimeline: {
    // backgroundColor: "seagreen",
    width: "70%",
    margin: "1rem auto",
  },
  paper: {
    background: "none",
    // backgroundColor: "red",
    display: "flex",
    // textAlign:'left',
    boxShadow: "none",
    "&>div:first-child": {
      // backgroundColor: "beige",
      margin: "auto",

      flexBasis: "30%",
      fontSize: "2.5rem",
      color: "#03A9F4",
      fontWeight: "600",
      letterSpacing: "0.2rem",
    },
  },
  eduContent: {
    color: "#ccd6f6",
    // backgroundColor: "azure",
    flexBasis: "70%",
    marginLeft: "2rem",
    display: "flex",
    textAlign: "left",
    flexDirection: "column",
    whiteSpace: "nowrap",
    letterSpacing: "0.07rem",
    "&>div:first-child": {
      // backgroundColor: "brown",
      fontSize: "1.3rem",
      color: "white",
    },
    "&>div:nth-of-type(2)": {
      // backgroundColor: "teal",

      margin: "0.7rem 0",
      fontSize: "0.8rem",
      "&>div:first-child": {
        marginBottom: "0.2rem",
      },
    },
  },
  dot: {
    borderColor: "#0091EA",
  },
  oddItem: {
    marginRight: "2rem",
    "&>div:first-child": {
      flexBasis: "70%",
      marginLeft: "5rem",
    },
  },
  lastSection: {
    backgroundColor: "blue",
    display: "flex",
    "&>div": {
      flexBasis: "50%",
    },
    margin: "5rem auto",
    width: "95%",
  },
  skillsContainer: {
    backgroundColor: "orange",
  },
  skills: {
    backgroundColor: "purple",
    marginTop: "2rem",
  },
  servicesContainer: {
    backgroundColor: "pink",
  },
  services: {
    backgroundColor: "green",
    marginTop: "2rem",
  },
});

function About({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.topContent}>
          <div className={classes.imageHolder}>
            <img alt="my-photo" src={myImage} />
          </div>
          <div className={classes.summaryBox}>
            <div className={classes.topHeading}>About Me</div>
            <div className={classes.summaryContent}>
              <div>
                Hello, my name is Anushka Bahuguna. I live in Dehradun,
                Uttarakhand. I am currently pursuing B.Sc. in Computer Science
                at Hansraj College (Delhi University). I am passionate about web
                and graphic designing.
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
            <Timeline align="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" className={classes.dot} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper className={classes.paper}>
                    <div>2022</div>
                    <div className={classes.eduContent}>
                      <div>B.Sc (Hons.) in Computer Science</div>
                      <div>
                        <div>Hansraj College, Delhi University, CGPA 9.55</div>
                        <div>(2019 - 2022) </div>
                      </div>
                    </div>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" className={classes.dot} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper className={`${classes.paper} ${classes.oddItem}`}>
                    <div>2019</div>
                    <div
                      className={classes.eduContent}
                      style={{ textAlign: "right" }}
                    >
                      <div>AISSCE</div>
                      <div>
                        <div>DPS Vasant Kunj, Delhi, 96.6%</div>
                        <div>(2017 - 2019) </div>
                      </div>
                    </div>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" className={classes.dot} />
                  <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper className={classes.paper}>
                    <div>2017</div>
                    <div className={classes.eduContent}>
                      <div>AISCE</div>
                      <div>
                        <div>CJM Waverley, Mussoorie, CGPA 10</div>
                        <div>(2015 - 2017) </div>
                      </div>
                    </div>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
        <div className={classes.lastSection}>
          <div className={classes.skillsContainer}>
            <div className={classes.eduHeading}>Skills</div>
            <div className={classes.skills}>
              <div className={classes.trial}></div>
            </div>
          </div>
          <div className={classes.servicesContainer}>
            <div className={classes.eduHeading}>Services</div>
            <div className={classes.services}>hjnsd</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(About);
