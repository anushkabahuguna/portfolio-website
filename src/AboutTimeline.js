import React, { useRef } from "react";
import { withStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import "./AboutTimeline.css";
import useOnScreen from "./utils/useOnScreen";
import styles from "./styles/AboutTimelineStyles";

const AboutTimeline = ({ classes }) => {
  const ref = useRef(0);
  const setAnimation = () => {
    ref.current.classList.add(`animation`);
  };
  const onScreen = useOnScreen(ref);

  return (
    <div ref={ref} className="root">
      {onScreen ? (
        <Timeline align="alternate">
          {setAnimation()}
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
      ) : (
        <Timeline align="alternate" style={{ opacity: 0 }}>
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
      )}
    </div>
  );
};

export default withStyles(styles)(AboutTimeline);
