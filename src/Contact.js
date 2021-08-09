import React, { useEffect, useRef } from "react";
import { withStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useInputState from "./hooks/useInputState";
import axios from "axios";
import { MenuItem, Select, Button } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    fontFamily: "Roboto ,sans-serif",
    backgroundColor: "red",
    margin: "6rem auto",
    color: "white",
    height: "85%",
  },
  container: {
    backgroundColor: "#ef1234",
    width: "80%",
    height: "100%",
    margin: "0 auto",
    display: "flex",
    "&>div": {
      flexBasis: "50%",
    },
  },
  headingContainer: {
    backgroundColor: "blue",
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
      borderBottom: "12px solid white",
      backgroundColor: "black",
      margin: "4rem 0",
    },
  },
  content: {
    backgroundColor: "pink",
  },
  icons: {
    backgroundColor: "orange",
    alignSelf: "flex-start",

    "&>div": {
      display: "flex",
      gap: "3rem",
      marginBottom: "3rem",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
              <div className={classes.icon}>X</div>
              <div className={classes.iconLabel}>
                anushkabahugunaa@gmail.com
              </div>
            </div>
            <div>
              <div className={classes.icon}>X</div>
              <div className={classes.iconLabel}>
                https://github.com/anushkabahuguna
              </div>
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <ValidatorForm ref={inputEl} onSubmit={handleSubmit}>
            <Select
              labelId="choice-label"
              id="choice-label"
              value={workType}
              onChange={setWorkType}
              name="work-type"
            >
              <MenuItem value={"Web Development"}>Web Development</MenuItem>
              <MenuItem value={"Graphic Designing"}>Graphic Designing</MenuItem>
            </Select>
            <div>
              <TextValidator
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
            <Button type="submit">Submit</Button>
          </ValidatorForm>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Contact);
