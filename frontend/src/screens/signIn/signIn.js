import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useLoginStyles from "./loginStyles";
import useDetails from "../useDetails";
import axios from "axios";
import "./login.css";
import signIn from "../../../src/assets/images/signIn.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import GoogleLogin from "react-google-login";

export default function SignInSide() {
  const responseGoogle = (response) => {
    setData({ name: response.nt.Ad, email: response.nt.wt });
    window.location.href = "http://localhost:3000/landing";
  };

  let initVals = { email: "", password: "" };
  const [vals, setVal] = useState(initVals);
  const [warn, setWarn] = useState("");
  const [Res, setRes] = useState({});
  const history = useHistory();
  const { email, password } = vals;

  const [setData, getData, user] = useDetails();

  useEffect(() => {
    const handler = async () => {
      await setData(Res);
      if (warn === "Logged In")
        window.location.href = "http://localhost:3000/landing";
    };
    handler();
  }, [warn, Res]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...vals, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/api/signIn", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        setRes(res.data.details);
        setWarn(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const classes = useLoginStyles();
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <div className="container-fluid bg-light mb-5">
        <div className="row">
          <div className="col-8">
            <figure>
              <img src={signIn} alt="SignIn picture" />
            </figure>
          </div>
          <div className="col-4">
            <Grid>
              <div className={classes.paper}>
                <Avatar
                  className={classes.avatar}
                  style={{ backgroundColor: "#6366f1", color: "#FFFFFF" }}
                >
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <br />
                <GoogleLogin
                  clientId="184577954974-pe1kq14kr8179el5q0nkkdhcfkk1iq50.apps.googleusercontent.com"
                  buttonText="SignIn with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
                <br />
                <Typography component="h6" variant="h6">
                  or
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <TextField
                    // variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={handleChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                  />
                  <Typography
                    component="h6"
                    variant="h6"
                    className={warn !== "" ? classes.show : classes.hidden}
                  >
                    {warn}
                  </Typography>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    //
                    style={{ backgroundColor: "#6366f1", color: "#FFFFFF" }}
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item>
                      <Link to="/register" exact variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Grid>
          </div>
        </div>
      </div>
      {/* <div >
        <Grid container component="main" className={classes.root} className="cont1"  >
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} lg={8} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} lg={4} component={Paper}  square >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}  style={{backgroundColor: '#6366f1', color: '#FFFFFF'}}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <br />
              <GoogleLogin
                clientId="184577954974-pe1kq14kr8179el5q0nkkdhcfkk1iq50.apps.googleusercontent.com"
                buttonText="SignIn with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
              <br />
              <Typography component="h6" variant="h6">
                or
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit} >
                <TextField
                  // variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                />
                <Typography component="h6" variant="h6" className={warn !== '' ? classes.show : classes.hidden}>
                  {warn}
                </Typography>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  // 
                  style={{backgroundColor: '#6366f1', color: '#FFFFFF'}}
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link to="/register" exact variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
              <div >
                <figure>
                  <img src={signIn} alt="SignIn picture" className="signImg" />
                </figure>
              </div>
            </div>
          </Grid>
        </Grid>
      </div> */}
    </div>
  );
}
