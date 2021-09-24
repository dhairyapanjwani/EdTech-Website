import React, { useEffect, useState, useContext } from "react";
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
import { GlobalContext } from "../../GlobalContext";
import useLoginStyles from "./loginStyles";
import useDetails from "../useDetails";
import axios from "axios";
import "./login.css";
import signIn from "../../../src/assets/images/signIn.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import GoogleLogin from "react-google-login";

export default function SignInSide() {
  const { userInfo } = useContext(GlobalContext);
  const [userData, setUserData] = userInfo;
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
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        setUserData(res.data.user);
        localStorage.setItem("edtech-user", JSON.stringify(res.data.user));
        if (
          res.data.message == "Please Verify Your Email!" ||
          res.data.message == "Invalid credentials"
        ) {
          setWarn(res.data.message);
        }
        setRes(res.data.user);
        if (res.data.user) {
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = async (googleData) => {
    const res = await fetch("http://localhost:3001/api/v1/auth/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setUserData(data.user);

    if (data.message == "success") {
      window.alert("login success");
      localStorage.setItem("edtech-user", JSON.stringify(data.user));
      history.push("/");
    } else {
      window.alert("Invalid credentials hei");
    }

    // store returned user somehow
  };

  const classes = useLoginStyles();
  return (
    <div
      className="bg-gray-50 flex flex-col justify-center align-center m-auto"
      id="Signin-Main-Block"
    >
      <div className="">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 mt-30 grid place-content-center">
            <figure>
              <img src={signIn} alt="SignIn picture" />
            </figure>
          </div>
          <div className="bg-gray-50 max-w-lg mt-35">
            <Grid>
              <div className="border-2 border-gray-200 border-opacity-60 rounded-lg p-6">
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
                    clientId="624398540702-hft2l1uf6p82b8u4ui0soag8l7e9mdrq.apps.googleusercontent.com"
                    buttonText="Log in with Google"
                    onSuccess={handleLogin}
                    onFailure={handleLogin}
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
              </div>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
