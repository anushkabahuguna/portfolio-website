import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Modal,
} from "@material-ui/core";
import { withRouter } from "react-router";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import { extractTitle } from "./utils/extractTitle";
import CancelIcon from "@material-ui/icons/Cancel";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: "100vw",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: theme.spacing(2, 4, 3),
    width: "40%",
    margin: "auto auto",
    height: "500px",
    transform: "translateY(40%)",
  },
  overlay: {},
});

function Navbar({ classes, history }) {
  const title = extractTitle(history.location.pathname);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title.map((t, i) => {
              return i === title.length - 1 ? `${t}` : `${t} - `;
            })}
          </Typography>
        </Toolbar>
        <Modal
          className={classes.overlay}
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={classes.paper}>
            <CancelIcon onClick={handleClose} />
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </div>
          {/* https://material-ui.com/components/transitions/ */}
        </Modal>
      </AppBar>
    </div>
  );
}

export default withRouter(withStyles(styles)(Navbar));
