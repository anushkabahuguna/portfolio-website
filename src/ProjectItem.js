import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import Slide from "@material-ui/core/Slide";

const styles = (theme) => ({
  "@keyframes myEffect": {
    "0%": {
      top: "0",
      width: "50vw",
    },
    "100%": {
      top: "100%",
      display: "none",
    },
  },
  "@keyframes myEffect2": {
    "0%": {
      top: "0",
      width: "50vw",
    },
    "100%": {
      top: "-100%",

      display: "none",
    },
  },
  overlay: {
    "& div": {
      position: "fixed",
      zIndex: "10",
      top: "100%",
      width: "50vw",
      height: "100vh",
    },
    "& div:nth-of-type(1)": {
      background: `url(https://images.unsplash.com/photo-1515387784663-e2e29a23f69e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80)`,
      animation: `$myEffect 3s ease-in-out`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
    "& div:nth-of-type(2)": {
      background:
        "url(https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
      transform: "translateX(100%)",
      backgroundColor: "orange",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      animation: `$myEffect2 3s ease-in-out`,
    },
  },
  copyOverlay: {},
});

function ProjectItem({
  description,
  startDate,
  endDate,
  gitHubLink,
  id,
  images,
  name,
  summary,
  tags,
  webLink,
  classes,
}) {
  const { introduction, ending } = description;
  const [open, setOpen] = useState(false);
  setTimeout(() => {
    setOpen(true);
  }, 1000);
  return (
    <div>
      <div className={classes.overlay}>
        <div className={`${classes.copyOverlay}`} />
        <div className={`${classes.copyOverlay} `} />
      </div>
      ss
    </div>
  );
}

export default withStyles(styles)(ProjectItem);
