import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
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
    color: (isDarkTheme) => (isDarkTheme ? "#ccd6f6" : "#233554"),
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
}));
export default styles;
