import React from "react";
import ProjectMiniItem from "./ProjectMiniItem";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import styles from "./styles/ProjectListStyles";

function ProjectList({ classes, projects }) {
  return (
    <div className={classes.root}>
      <Grid container className={classes.container} spacing={4}>
        {projects.map((project, index) => (
          <Grid item lg={4} md={6} xs={12} key={index}>
            <ProjectMiniItem {...project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(ProjectList);
