import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

// const services = ['Front-end React', 'Node.js Web App','Graphic Designing']

const styles = (theme) => ({
  root: {
    height: "100%",
    overflow: "hidden",
    display: "flex",
    overflowY: "auto",
    margin: "auto 0",
    flexGrow: 1,
  },
  container: {
    // backgroundColor: "black",
    overflow: "hidden",
    width: "85%",
    height: "70%",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
  },
  item: {
    // backgroundColor: "yellow",
    // margin: "auto 1rem",
    display: "flex",
    // width: "fit-content",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "1rem",
    letterSpacing: "0.1rem",
    fontWeight: "bold",
    color: "#ccd6f6",
    // backgroundColor: "red",
  },
  image: {
    // backgroundColor: "pink",
    margin: "1rem auto",
  },
  img: {
    // backgroundColor: "red",
    width: "106px",
    margin: "0 auto",
    height: "auto",
    objectFit: "cover",
  },
});
function Services({ classes, services }) {
  return (
    <div className={classes.root}>
      <Grid container className={classes.container} spacing={4}>
        {services.map((service, index) => (
          <Grid item lg={6} md={6} xs={12} className={classes.item} key={index}>
            <div className={classes.image}>
              <img
                alt={services.title}
                src={service.logo.default}
                className={classes.img}
              />
            </div>
            <div className={classes.title}>{service.title}</div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Services);
