import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { animated, useSprings } from "react-spring";
import { Grid } from "@material-ui/core";
import ProjectMiniItem from "./ProjectMiniItem";
import styles from "./styles/ProjectListStyles";

const delay = 250;

function ProjectList({ classes, projects }) {
  const AnimatedGrid = animated(Grid);

  const getDelay = (index) => {
    return {
      delay: delay * index + 100,
    };
  };
  let springs = useSprings(
    projects.length,
    projects.map((item, index) => ({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: false,
      reverse: false,
      delay: getDelay(index).delay,
      config: { frequency: 4 },
    }))
  );

  return (
    <div className={classes.root}>
      <Grid container className={classes.container} spacing={4}>
        {springs.map((styles, index) => (
          <AnimatedGrid item lg={4} md={6} xs={12} key={index} style={styles}>
            <ProjectMiniItem {...projects[index]} />
          </AnimatedGrid>
        ))}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(ProjectList);
