import React, { useRef } from "react";
import { useTheme, ThemeProvider } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useInputState from "./hooks/useInputState";
import axios from "axios";
import { MenuItem, Select, Snackbar } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "@material-ui/core";
import useToggleState from "./hooks/useToggleState";
import styles from "./styles/ContactStyles";
import useOnScreen from "./utils/useOnScreen";
import { useStore } from "./contexts/theme.context";
import "./Contact.css";

function Contact() {
  const { isDarkTheme } = useStore();

  const inputEl = useRef("form");
  const formRef = useRef(0);
  const classes = styles(isDarkTheme);
  const theme = useTheme();
  const setAnimation = () => {
    formRef.current.classList.add(`form-animation`);
  };
  const onFormScreen = useOnScreen(formRef);
  const [email, setEmail, resetEmail] = useInputState("");
  const [name, setName, resetName] = useInputState("");
  const [message, setMessage, resetMessage] = useInputState("");
  const [workType, setWorkType] = useInputState("Web Development");
  const [isSubmitted, toggleIsSubmitted] = useToggleState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleString();
    const obj = {
      date,
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
        toggleIsSubmitted();
      });
    resetEmail();
    resetName();
    resetMessage();
  };

  return (
    <ThemeProvider theme={theme}>
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
          <div ref={formRef} className="Contact">
            <div className={classes.content}>
              {onFormScreen ? (
                <ValidatorForm
                  ref={inputEl}
                  onSubmit={handleSubmit}
                  className={classes.form}
                >
                  {setAnimation()}
                  <Select
                    labelId="choice-label"
                    id="choice-label"
                    value={workType}
                    onChange={setWorkType}
                    disableUnderline={true}
                    name="work-type"
                    className={classes.select}
                  >
                    <MenuItem value={"Web Development"}>
                      Web Development
                    </MenuItem>
                    <MenuItem value={"Graphic Designing"}>
                      Graphic Designing
                    </MenuItem>
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
                      errorMessages={[
                        "This field is required",
                        "Email is not valid",
                      ]}
                    />
                  </div>
                  <div>
                    <TextValidator
                      fullWidth
                      id="message-input"
                      onChange={setMessage}
                      name="message"
                      multiline={true}
                      rows={5}
                      label="Message"
                      value={message}
                      validators={["required", "maxStringLength:700"]}
                      errorMessages={[
                        "This field is required",
                        "Reached max limit",
                      ]}
                    />
                  </div>

                  {/* sendgrid API for mails */}
                  <button type="submit" className={classes.submit}>
                    Submit
                  </button>
                  <Snackbar
                    className={classes.snackbar}
                    autoHideDuration={3000}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={isSubmitted}
                    onClose={toggleIsSubmitted}
                    message="Submitted!"
                  />
                </ValidatorForm>
              ) : (
                <ValidatorForm
                  ref={inputEl}
                  onSubmit={handleSubmit}
                  className={classes.form}
                  style={{ opacity: 0 }}
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
                    <MenuItem value={"Web Development"}>
                      Web Development
                    </MenuItem>
                    <MenuItem value={"Graphic Designing"}>
                      Graphic Designing
                    </MenuItem>
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
                      errorMessages={[
                        "This field is required",
                        "Email is not valid",
                      ]}
                    />
                  </div>
                  <div>
                    <TextValidator
                      fullWidth
                      id="message-input"
                      onChange={setMessage}
                      name="message"
                      multiline={true}
                      rows={5}
                      label="Message"
                      value={message}
                      validators={["required", "maxStringLength:700"]}
                      errorMessages={[
                        "This field is required",
                        "Reached max limit",
                      ]}
                    />
                  </div>

                  {/* sendgrid API for mails */}
                  <button type="submit" className={classes.submit}>
                    Submit
                  </button>
                  <Snackbar
                    className={classes.snackbar}
                    autoHideDuration={3000}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={isSubmitted}
                    onClose={toggleIsSubmitted}
                    message="Submitted!"
                  />
                </ValidatorForm>
              )}
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Contact;
