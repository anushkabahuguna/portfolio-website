import React, { useRef, useMemo } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useOnScreen from "./utils/useOnScreen";
import styles from "./styles/ServicesStyles";
import "./Services.css";

function Services({ classes, services }) {
  const inputRefs = useMemo(
    () =>
      Array(3)
        .fill(0)
        .map((i) => React.createRef(i)),
    []
  );

  const ref2 = useRef(0);
  const onScreen = useOnScreen(ref2);
  const func = () => {
    if (onScreen) {
      ref2.current.classList.add(`Services-Animate`);
      inputRefs[0].current.classList.add("Services-left-animate");
      inputRefs[1].current.classList.add("Services-right-animate");
      inputRefs[2].current.classList.add("Services-bottom-animate");
    }
  };
  return (
    <div className="Services" ref={ref2}>
      {onScreen ? (
        <div className={classes.root}>
          <Grid container className={classes.container} spacing={4}>
            {services.map((service, index) => (
              <Grid
                item
                lg={6}
                ref={inputRefs[index]}
                md={6}
                xs={12}
                className={`${classes.item}`}
                key={index}
              >
                {func()}
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
      ) : (
        <div className={classes.root} style={{ opacity: 0 }}>
          <Grid container className={classes.container} spacing={4}>
            {services.map((service, index) => (
              <Grid
                item
                lg={6}
                md={6}
                xs={12}
                ref={inputRefs[index]}
                className={classes.item}
                key={index}
              >
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
      )}
    </div>
  );
}

export default withStyles(styles)(Services);
