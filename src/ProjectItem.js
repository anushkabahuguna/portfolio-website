import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import { Divider } from "@material-ui/core/";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import { Link } from "@material-ui/core";
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
  root: {
    height: "100vh",
    overflowY: "auto",
    overflowX: "hidden",
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
      // backgroundColor: "orange",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      animation: `$myEffect2 3s ease-in-out`,
    },
  },
  container: {
    color: "white",
    transform: "translateY(10rem)",
    margin: "0 auto ",

    fontSize: "1.1rem",
    width: "60%",
    height: "70%",

    // backgroundColor: "orange",
  },
  title: {
    fontSize: "4rem",
    letterSpacing: "0.05rem",
  },
  description: {
    // backgroundColor: "red",
    width: "100%",
    marginTop: "2rem",
    lineHeight: "1.5rem",
    "& p ": {
      margin: "1rem auto",
    },
  },
  divider: {
    backgroundColor: "white",
  },
  details: {
    marginTop: "3rem",
    marginBottom: "2rem",
    letterSpacing: "0.07rem",
    "&>div": {
      display: "flex",
      // backgroundColor: "grey",
      padding: "2rem 0",
      "&>div:nth-of-type(1)": {
        // backgroundColor: "red",
        minWidth: "9rem",
        fontWeight: "600",
        textTransform: "uppercase",
        margin: "auto 0",
      },
      "&>div:nth-of-type(2)": {
        // backgroundColor: "blue",
        minWidth: "9rem",

        display: "flex",
        margin: "0 2rem",
      },
    },
  },
  tags: {
    "&>div": {
      marginRight: "3rem",
      backgroundColor: "white",
      color: "black",
      borderRadius: "28px",
      padding: "5px 15px",
    },
  },
  icon: {
    color: "white",
    // backgroundColor: "#123ef5",
    padding: " 0 1em",
  },
  images: {
    // backgroundColor: "red",
  },
  imageHolder: {
    "& img": {
      maxWidth: "100%",
      height: "auto",
      margin: "0 0 2rem 0",
    },
  },
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
  console.log(images);
  return (
    <div className={classes.root}>
      <div className={classes.overlay}>
        {/* <div />
        <div /> */}
      </div>
      <div className={classes.container}>
        <h1 className={classes.title}>{name}</h1>
        <div className={classes.description}>
          <p>{introduction}</p>
          <p>{ending}</p>
        </div>
        <div className={classes.details}>
          <div>
            <div>Project Date</div>
            <div>
              {startDate} - {endDate}
            </div>
          </div>
          <Divider className={classes.divider} />
          <div>
            <div>Technologies</div>
            <div className={classes.tags}>
              {tags.map((t) => (
                <div>{t}</div>
              ))}
            </div>
          </div>
          <Divider className={classes.divider} />
          <div>
            <div>Demo</div>
            <div>
              <Link href={gitHubLink} className={classes.icon} target="_blank">
                <GitHubIcon />
              </Link>

              <div>•</div>

              <Link href={webLink} className={classes.icon} target="_blank">
                <LanguageIcon />
              </Link>
            </div>
          </div>
          <Divider className={classes.divider} />
        </div>
        <div className={classes.images}>
          {images.map((image) => (
            <div className={classes.imageHolder}>
              <img src={image.default} alt={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(ProjectItem);
