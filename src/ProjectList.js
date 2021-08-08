import React from "react";
import ProjectMiniItem from "./ProjectMiniItem";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    height: "100%",
    overflow: "scroll",
    overflowX: "hidden",
    overflowY: "auto",
    flexGrow: 1,
  },
  container: {
    // backgroundColor: "black",
    margin: "3rem auto",
    width: "85%",
    display: "flex",
    justifyContent: "center",
  },
  item: {},
});

function ProjectList({ classes, projects }) {
  return (
    <div className={classes.root}>
      {/* 10% height for navbar */}
      {/* here comes the navbar */}
      <Grid container className={classes.container} spacing={4}>
        {projects.map((project, index) => (
          <Grid item lg={4} md={6} xs={12} className={classes.item} key={index}>
            <ProjectMiniItem {...project} className={classes.item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(ProjectList);
