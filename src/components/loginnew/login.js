import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import logo from "../../assets/images/logo.png";
import Button from "@material-ui/core/Button";
import Checkbox from "./checkbox";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import "./loginnew.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "400px",
  },
}));
const checked = false;
const Login = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameDirty, setisUsernameDirty] = useState(false);
  const [isPasswordDirty, setisPasswordDirty] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isUserInvalid, setisUserInvalid] = useState(false);
  const [isPasswordInvalid, setisPasswordInvalid] = useState(false);
  const [isLoginbtnClicked, setIsLoginbtnClicked] = useState(false);
  let history = useHistory();
  const onchangeuser = (event) => {
    const name = event.target.value;
    setUsername(name);
    setisUsernameDirty(true);

    setisUserInvalid(false);
    if (isLoginbtnClicked) {
      validate(name);
    }
  };
  const onchangepass = (event) => {
    const userPassword = event.target.value;
    setPassword(userPassword);
    setisPasswordDirty(true);

    setisPasswordInvalid(false);
    if (isLoginbtnClicked) {
      validate(username, userPassword);
    }
  };
  const validate = (name = username, userPassword = password) => {
    let email = name.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    
    //console.log(username)
    if (name === "") {
      setUsernameError("field is empty");
    }
    //let emailValid = username.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    else if (!((/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(name))) {
      setUsernameError("not valid");
      setisUserInvalid(true);
    }
    if (userPassword === "") {
      setPasswordError("field is empty");
    } else if (userPassword.length < 5) {
      setisPasswordInvalid(true);
      setPasswordError("please enter 5 char");
    }
  };
  const onsubmit = (event) => {
   
    event.preventDefault();
    setIsLoginbtnClicked(true);
    validate(username, password);
    //const history = useHistory();
    const user = {
username,
password,
checked
    };
   // console.log(user);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
  };
  axios.post('http://13.126.250.89/BWIAPI/api/Auth/login', user)
            .then(res => {
             // console.log("Response: " + res.data);
      
              if(res.data.Success){                
                history.push("LandingPage");
                let userdetails = res.data.Data;
                let name = userdetails.NameEn;
                //console.log(name);
                localStorage.setItem("user", JSON.stringify(userdetails));
              }
            })
            
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <Grid container className="logindiv" justify="center" alignItems="center">
                <Paper className={classes.paper}>
''                  <div>
                    <img
                      src={logo}
                      alt=""
                      width="70%"
                      className="text-center logo"
                      title=""
                    />
                  </div>
                  <h1 class="login-txt">Login</h1>
                  <p class="loginSub-txt">
                    Enter your details below to continue
                  </p>
                  <form
                    className={classes.root}
                    onSubmit={onsubmit}
                    autoComplete="off"
                    data-testid="form"
                  >
                    <div>
                      <TextField
                        error={
                          (username === "" && isUsernameDirty) || isUserInvalid
                        }
                        id="outlined-basic"
                        required
                        label="User name"
                        variant="outlined"
                        data-testid="Email"
                        value={username}
                        onChange={onchangeuser}
                        helperText={
                          ((username === "" && isUsernameDirty) ||
                            isUserInvalid) &&
                          usernameError
                        }
                      />{" "}
                    </div>
                    <div>
                      <TextField
                        id="outlined-basic"
                        required
                        error={
                          (password === "" && isPasswordDirty) ||
                          isPasswordInvalid
                        }
                        type="password"
                        label="Password"
                        data-testid="Password"
                        variant="outlined"
                        value={password}
                        onChange={onchangepass}
                        helperText={
                          ((password === "" && isPasswordDirty) ||
                            isPasswordInvalid) &&
                          passwordError
                        }
                      />{" "}
                    </div>
                    <div>
                      <p class="forgotPwd">
                        <a href="#">Forgot Password</a>
                      </p>
                    </div>

                    <Button
                      variant="contained"
                      type="submit"
                      size="large"
                      color="primary"
                      className="loginbtn"
                    >
                      LOGIN
                    </Button>
                    <Checkbox></Checkbox>
                  </form>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Login;
