import React, { useState, useContext } from "react";
import {
  withStyles,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { FirebaseContext } from "../../../services/Firebase";
import styles from "./styles";

const Signup = (props) => {
  const firebase = useContext(FirebaseContext);

  const { classes } = props;
  const data = {
    pseudo: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const [formData, setFormData] = useState(data);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    console.log("signup", firebase);
    firebase
      .signup(email, password)
      .then((user) => {
        setFormData({ ...data });
        setSuccess("Your account has been registered");
      })
      .catch((error) => {
        setError(error.message);
        setFormData({ ...data });
      });
  };

  const { pseudo, email, password, passwordConfirm } = formData;

  const submitButton =
    email === "" || password === "" || password !== passwordConfirm ? (
      <Button type="submit" disabled variant="outlined">
        Register
      </Button>
    ) : (
      <Button type="submit" variant="outlined">
        Register
      </Button>
    );

  const errorMessage = error !== "" && <span>{error}</span>;
  const succesMessage = success !== "" && <span>{success}</span>;

  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item container direction="column" xs>
          <Typography variant="h5" className="pb-5">
            Register
          </Typography>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div>
              <TextField
                id="pseudo"
                value={pseudo}
                label="pseudo"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                id="email"
                value={email}
                label="Email"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                id="password"
                value={password}
                label="Password"
                type="password"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                id="passwordConfirm"
                value={passwordConfirm}
                label="Confirm Password"
                type="password"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="pt-2 pb-5">{submitButton}</div>
            {errorMessage} {succesMessage}
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(Signup);
