import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/HomeStyles";
import Particles from "react-particles-js";
import { particlesData3 } from "./assests/particles";
// import { Link } from "react-router-dom";
import { Link } from "react-tiger-transition";
import { useThemeContext } from "./contexts/theme.context";

function Home({ classes }) {
  const { globalState, dispatch } = useThemeContext();
  const { isDarkTheme } = globalState;
  return (
    <div className={classes.root}>
      {console.log(isDarkTheme)}

      <div style={{ position: "relative" }}>
        <Particles params={particlesData3} />
      </div>
      <div className={classes.content}>
        <div className={classes.topHeadings}>
          <h1 className={classes.heading}>Anushka Bahuguna</h1>
          <div className={classes.des}>Web Developer | Graphic Designer</div>
        </div>
        <div className={classes.links}>
          <Link to="/about" transition="scaleUp">
            About
          </Link>

          <Link to="/projects" transition="scaleUp">
            Projects
          </Link>

          <Link to="/contact" transition="scaleUp">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Home);
