import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import handleViewport from "react-in-viewport";
import useProgressState from "./hooks/useProgressState";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
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

const Block = (props) => {
  const { inViewport, classes, forwardedRef } = props;
  const [eighty, setEightyTimer] = useProgressState(80);
  const [sixty, setSixtyTimer] = useProgressState(60);
  const [fourty, setFourtyTimer] = useProgressState(40);
  const [twenty, setTwentyTimer] = useProgressState(20);
  return (
    <div className="viewport-block" ref={forwardedRef}>
      {inViewport ? (
        <Box alignItems="center" className={classes.root}>
          <Box width="100%" mr={4} className={classes.singleBox}>
            {setEightyTimer()}
            <div className={classes.texts}>
              <Typography
                className={classes.txt}
                variant="body2"
                color="textSecondary"
              >
                C++
              </Typography>
              <Typography
                className={classes.txt}
                variant="body2"
                color="textSecondary"
              >{`${Math.round(eighty)}%`}</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              {...props}
              value={eighty}
              className={classes.progress}
            />
          </Box>
          <Box width="100%" mr={4} className={classes.singleBox}>
            {setEightyTimer()}
            <div className={classes.texts}>
              <Typography
                className={classes.txt}
                variant="body2"
                color="textSecondary"
              >
                Front-End Web Development
              </Typography>
              <Typography
                className={classes.txt}
                variant="body2"
                color="textSecondary"
              >{`${Math.round(eighty)}%`}</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              {...props}
              value={eighty}
              className={classes.progress}
            />
          </Box>
          <Box width="100%" mr={4} className={classes.singleBox}>
            {setSixtyTimer()}
            <div className={classes.texts}>
              <Typography
                className={classes.txt}
                variant="body2"
                color="textSecondary"
              >
                MERN
              </Typography>
              <Typography
                className={classes.txt}
                variant="body2"
                color="textSecondary"
              >{`${Math.round(sixty)}%`}</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              {...props}
              value={sixty}
              className={classes.progress}
            />
          </Box>
          <Box width="100%" mr={4} className={classes.singleBox}>
            {setFourtyTimer()}
            <div className={classes.texts}>
              <Typography
                className={classes.txt}
                variant="body2"
                color="textSecondary"
              >
                Java
              </Typography>
              <Typography
                className={classes.txt}
                variant="body2"
                color="textSecondary"
              >{`${Math.round(fourty)}%`}</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              {...props}
              value={fourty}
              className={classes.progress}
            />
          </Box>
          <Box width="100%" mr={4} className={classes.singleBox}>
            {setFourtyTimer()}
            <div className={classes.texts}>
              <Typography
                className={classes.txt}
                variant="body2"
                color="textSecondary"
              >
                Adobe Photoshop / Illustrator
              </Typography>
              <Typography
                className={classes.txt}
                variant="body2"
                color="textSecondary"
              >{`${Math.round(fourty)}%`}</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              {...props}
              value={fourty}
              className={classes.progress}
            />
          </Box>
          <Box width="100%" mr={4} className={classes.singleBox}>
            {setTwentyTimer()}
            <div className={classes.texts}>
              <Typography
                className={classes.txt}
                variant="body2"
                color="textSecondary"
              >
                Android
              </Typography>
              <Typography
                className={classes.txt}
                variant="body2"
                color="textSecondary"
              >{`${Math.round(twenty)}%`}</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              {...props}
              value={twenty}
              className={classes.progress}
            />
          </Box>
          <Box width="100%" mr={4} className={classes.singleBox}>
            {setTwentyTimer()}
            <div className={classes.texts}>
              <Typography
                className={classes.txt}
                variant="body2"
                color="textSecondary"
              >
                Python
              </Typography>
              <Typography
                className={classes.txt}
                variant="body2"
                color="textSecondary"
              >{`${Math.round(twenty)}%`}</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              {...props}
              value={twenty}
              className={classes.progress}
            />
          </Box>
        </Box>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};
Block.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
Block.defaultProps = {};
const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

const MySection = (props) => {
  return (
    <ViewportBlock
      {...props}
      // onEnterViewport={() => console.log("enter")}
      // onLeaveViewport={() => console.log("leave")}
    ></ViewportBlock>
  );
};

export default withStyles(styles)(MySection);
