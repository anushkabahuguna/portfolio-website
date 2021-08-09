import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import { withRouter } from "react-router";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import { extractTitle } from "./utils/extractTitle";
import CancelIcon from "@material-ui/icons/Cancel";
import { Link } from "react-router-dom";
import styles from "./styles/NavbarStyles";

function Navbar({ classes, history }) {
  const title = extractTitle(history.location.pathname);
  if (title.length === 0) {
    title[0] = "Home";
  }
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <AppBar position="absolute" color="transparent" className={classes.bar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            className={classes.title}
            style={{ textAlign: "right" }}
          >
            {title.map((t, i) => {
              return i === title.length - 1 ? `${t}` : `${t} - `;
            })}
          </Typography> */}
        </Toolbar>
        <div
          className={`${classes.copyMsg} ${open && classes.showMessage} `}
          style={{ display: open ? "" : "none" }}
        >
          <CancelIcon onClick={handleClose} className={classes.cancelIcon} />

          {/* side projects come in link */}
          <div className={classes.links}>
            {links.map((link) => (
              <Link
                to={`/${link.toLowerCase()}`}
                onClick={handleClose}
                style={
                  link === title[0] ? { color: "#e30766" } : { color: "black" }
                }
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div
          onClick={handleOpen}
          className={`${classes.copyOverlay} ${open && classes.showOverlay} `}
        />
      </AppBar>
    </div>
  );
}

export default withRouter(withStyles(styles)(Navbar));
