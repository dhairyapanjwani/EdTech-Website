import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useRegisterStyles from "./registerStyles";
import useValidation from "../../validation/useValidation";
import "./register.css";
import register from "../../assets/images/register.png";



export default function SignUp() {
  const history = useHistory();
  const [isChecked, setChecked] = useState({ value: true, initial: true });
  const [warn, setWarn] = useState("");
  let initVals = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    password: "",
    address: "",
    role: "",
  };
  const [vals, setVal] = useState(initVals);

  const [err, validate] = useValidation();

  useEffect(() => {
    if (warn === "Registered Successfully") history.push("/login");
  }, [warn]);
  const classes = useRegisterStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "role") setChecked((prev) => !prev);
    setVal({ ...vals, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(vals, setWarn);
    
    console.log(vals);
  };

  return (
    <div className="container-fluid bg-light">
      <div class="grid grid-cols-3 gap-4">
      <div class="col-span-2 grid place-content-center">
          <figure class=" mb-20 ">
            <img src={register} alt="SignIn picture" />
          </figure>

        </div>
        <div class="mb-20 align-middle" >
          <Container  >
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar
                className={classes.avatar}
                style={{ backgroundColor: "#6366f1", color: "#FFFFFF" }}
              >
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Typography
                    component="h6"
                    variant="h6"
                    className={warn !== "" ? classes.show : classes.hidden}
                  >
                    {warn}
                  </Typography>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      // variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      error={err.fname}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      // variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                      error={err.lname}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      error={err.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="mobileNo"
                      label="Mobile Number"
                      name="mobileNo"
                      autoComplete="mobileNo"
                      error={err.num}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="address"
                      label="Address"
                      name="address"
                      autoComplete="address"
                      error={err.address}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      error={err.password}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ backgroundColor: "#6366f1", color: "#FFFFFF" }}
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link to="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
