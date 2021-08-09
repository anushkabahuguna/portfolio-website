import React, { useEffect, useRef } from "react";
import { withStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useInputState from "./hooks/useInputState";
import axios from "axios";
import { MenuItem, Select } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "@material-ui/core";
const styles = (theme) => ({
  root: {
    fontFamily: "Roboto ,sans-serif",
    // backgroundColor: "red",
    margin: "6rem auto",
    color: "white",
    height: "85%",
  },
  container: {
    // backgroundColor: "#ef1234",
    width: "80%",

    height: "100%",
    margin: "0 auto",
    display: "flex",
    "&>div": {
      flexBasis: "50%",
    },
  },
  headingContainer: {
    // backgroundColor: "blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "2rem",
  },
  headings: {
    fontSize: "5rem",
    alignSelf: "flex-start",

    fontFamily: "Work Sans, sans-serif",
    "&>div": {
      textDecoration: "underline",
      // borderBottom: "12px solid white",
      backgroundColor: "black",
      textUnderlineOffset: "3px",
      margin: "4rem 0",
    },
  },
  content: {
    // backgroundColor: "pink",
  },
  icons: {
    // backgroundColor: "orange",
    alignSelf: "flex-start",

    "& a": {
      color: "white",
    },
    "&>div": {
      display: "flex",
      gap: "2rem",
      marginBottom: "3rem",
    },
  },
  form: {
    // backgroundColor: "orange",
    margin: "6rem 0",
    "& >*": {
      // border: "2px solid black",
      margin: "2rem 0",
      // width: "100%",
      padding: "0.5rem 0.5rem",

      backgroundColor: "white",
    },
    "& >div:nth-of-type(2)": {
      marginTop: "1rem",
    },
  },
  select: {
    borderBottom: "3px solid black",
    padding: "0.5rem 0.5rem",

    height: "100%",
    color: "black",
    width: "100%",
    "&>div:nth-of-type(1)": {
      height: "100%",
      background: "none",
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    "& svg": {
      color: "BLACK",
    },
  },
  submit: {
    border: "none",
    cursor: "pointer",
    padding: "1.4rem 2rem",
    outline: "none",
    "&:hover": {
      backgroundColor: "#ededeb",
    },
  },
  iconLabel: {
    // backgroundColor: "red",
    margin: "auto 0",
    fontSize: "0.9rem",
  },
});

function Contact({ classes }) {
  const inputEl = useRef("form");

  const [email, setEmail, resetEmail] = useInputState("");
  const [name, setName, resetName] = useInputState("");
  const [message, setMessage, resetMessage] = useInputState("");
  const [workType, setWorkType, resetWorkType] =
    useInputState("Web Development");
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      workType,
      name,
      email,
      message,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/95fc9b7b-916b-4544-92fc-c1803df26549",
        obj
      )
      .then((response) => {
        // console.log(response);
      });
    resetEmail();
    resetName();
    resetMessage();
  };
  useEffect(() => {
    // ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
    //   this.props.colors.every(
    //     ({ name }) => name.toLowerCase() !== value.toLowerCase()
    //   )
    // );
  });
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.headingContainer}>
          <div className={classes.headings}>
            <div>Let's get</div>
            <div>in touch</div>
          </div>
          <div className={classes.icons}>
            <div>
              <Link
                href="mailto:anushkabahugunaa@gmail.com"
                className={classes.icon}
                target="_blank"
              >
                <MailIcon />
              </Link>
              <div className={classes.iconLabel}>
                anushkabahugunaa@gmail.com
              </div>
            </div>
            <div>
              <Link
                href="https://github.com/anushkabahuguna"
                className={classes.icon}
                target="_blank"
              >
                <GitHubIcon />
              </Link>
              <div className={classes.iconLabel}>anushkabahuguna</div>
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <ValidatorForm
            ref={inputEl}
            onSubmit={handleSubmit}
            className={classes.form}
          >
            <Select
              labelId="choice-label"
              id="choice-label"
              value={workType}
              onChange={setWorkType}
              disableUnderline={true}
              name="work-type"
              className={classes.select}
            >
              <MenuItem value={"Web Development"}>Web Development</MenuItem>
              <MenuItem value={"Graphic Designing"}>Graphic Designing</MenuItem>
            </Select>
            <div>
              <TextValidator
                fullWidth
                id="name-input"
                onChange={setName}
                name="name"
                value={name}
                label="Full Name"
                validators={["required"]}
                errorMessages={["This field is required"]}
              />
            </div>
            <div>
              <TextValidator
                fullWidth
                id="email-input"
                onChange={setEmail}
                name="email"
                label="Email"
                value={email}
                validators={["required", "isEmail"]}
                errorMessages={["This field is required", "Email is not valid"]}
              />
            </div>
            <div>
              <TextValidator
                fullWidth
                id="message-input"
                onChange={setMessage}
                name="message"
                label="Message"
                value={message}
                validators={["required", "maxStringLength:100"]}
                errorMessages={["This field is required", "Reached max limit"]}
              />
            </div>
            {/* sendgrid API for mails */}
            <button type="submit" className={classes.submit}>
              Submit
            </button>
          </ValidatorForm>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Contact);
