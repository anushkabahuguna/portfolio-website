import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: "#111",
    display: "flex",
    height: "343px",
    justifyContent: "center",
    alignItems: "center",
    horizontalAlign: "center",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    "&:hover >div:first-child ": {
      height: "100%",
      transform: "translateY(0%)",
    },
  },

  overlay: {
    backgroundColor: " rgba(0, 0,0, 0.8)",
    color: "white",
    width: "100%",
    boxSizing: "border-box",
    transition: "transform .3s ease",
    height: "100%",
    transform: "translateY(0%)",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& h3": {
      marginBottom: "1.5rem",
    },
  },
  btn: {
    cursor: "pointer",
    border: "2px solid rgba(255,255,255,1)",
    fontSize: "1rem",
    fontWeight: "700",
    boxShadow: `8px 8px 0px -1px rgba(255,255,255,1)`,
    textAlign: "center",
    outline: "none",
    marginTop: "2rem",
    transition: "all .3s ease-in-out",
    "& a": {
      textDecoration: "none",
      color: "white",
      height: "100%",
      display: "inline-block",
      padding: "0.5rem 2rem",
    },
    "&:hover": {
      textDecoration: "none",
      boxShadow: "none",
      backgroundColor: "white",
    },
    "&:hover a": {
      color: "black",
    },
  },
});

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
          <Link to={`/projects/${id}`}>Click me</Link>
        </div>
      </div>
    </div>
  );
}
export default withStyles(styles)(ProjectMiniItem);
