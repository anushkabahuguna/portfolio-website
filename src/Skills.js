import React, { useRef } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useProgressState from "./hooks/useProgressState";
import useOnScreen from "./utils/useOnScreen";
import { useStore } from "./contexts/theme.context";
import styles from "./styles/SkillsStyles";

const Skills = () => {
  const { isDarkTheme } = useStore();
  const classes = styles(isDarkTheme);
  const ref = useRef(0);
  const setAnimation = () => {
    setSeventyTimer();
    setSixtyTimer();
    setFourtyTimer();
    setTwentyTimer();
  };
  const onScreen = useOnScreen(ref);
  const [seventy, setSeventyTimer] = useProgressState(70);
  const [sixty, setSixtyTimer] = useProgressState(60);
  const [fourty, setFourtyTimer] = useProgressState(40);
  const [twenty, setTwentyTimer] = useProgressState(20);
  return (
    <div ref={ref}>
      {onScreen ? (
        <Box alignItems="center" className={classes.root}>
          <Box width="100%" mr={4} className={classes.singleBox}>
            {setAnimation()}
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
              >{`${Math.round(seventy)}%`}</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              value={seventy}
              className={classes.progress}
            />
          </Box>
          <Box width="100%" mr={4} className={classes.singleBox}>
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
              >{`${Math.round(sixty)}%`}</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              value={sixty}
              className={classes.progress}
            />
          </Box>
          <Box width="100%" mr={4} className={classes.singleBox}>
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
              value={sixty}
              className={classes.progress}
            />
          </Box>
          <Box width="100%" mr={4} className={classes.singleBox}>
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
              value={fourty}
              className={classes.progress}
            />
          </Box>
          <Box width="100%" mr={4} className={classes.singleBox}>
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
              value={fourty}
              className={classes.progress}
            />
          </Box>
          <Box width="100%" mr={4} className={classes.singleBox}>
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
              value={twenty}
              className={classes.progress}
            />
          </Box>
          <Box width="100%" mr={4} className={classes.singleBox}>
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
              value={twenty}
              className={classes.progress}
            />
          </Box>
        </Box>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default Skills;
