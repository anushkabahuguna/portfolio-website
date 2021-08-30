import React, { useRef } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core/";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import { Link } from "@material-ui/core";
import styles from "./styles/ProjectItemStyles";
import useOnScreen from "./utils/useOnScreen";

function ProjectItem({
  classes,
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
}) {
  const { introduction, ending } = description;
  const ref = useRef(0);
  const setAnimation = () => {
    ref.current.classList.add(`form-animatiossn`);
  };
  const onFormScreen = useOnScreen(ref);
  return (
    <div className={classes.root} ref={ref}>
      <div className={classes.overlay}>
        <div />
        <div />
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
              {tags.map((t, index) => (
                <div key={index}>{t}</div>
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
          {images.map((image, index) => (
            <div className={classes.imageHolder} key={index}>
              <img src={image.default} alt={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(ProjectItem);
