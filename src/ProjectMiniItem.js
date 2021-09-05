import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-tiger-transition";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ProjectMiniItemStyles";

function ProjectMiniItem({ id, name, summary, images, classes }) {
  return (
    <div
      className={classes.root}
      style={{ backgroundImage: `url(${images[0].default})` }}
    >
      <div className={classes.overlay}>
        <div>
          <h3>{name}</h3>
          <div>{summary}</div>
        </div>
        {/* // replace with link router link */}
        <div className={classes.btn}>
          <Link
            to={`${process.env.PUBLIC_URL}/projects/${id}`}
            transition="default-fade"
          >
            Click me
          </Link>
        </div>
      </div>
    </div>
  );
}
export default withStyles(styles)(ProjectMiniItem);
