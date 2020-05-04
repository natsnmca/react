import React,{ useState } from 'react';
import './login.css';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import logo from '../../assets/images/logo.png';
import '../../index.css';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
  }));

function Login() {
    const classes = useStyles();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    const DoLogin = ()=>{
        const user = {
          UserName: userName,
          Password: password
          };
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName, password })
        };
      console.log(userName);
      console.log(password);
      console.log(user);
      console.log(JSON.stringify({ user }));
          axios.post('https://localhost:5000/api/Authentication/login', user)
            .then(res => {
              console.log("Response: " + res.data);
              console.log(res.data.isAuthenticated);
              if(res.data.IsAuthenticated){
                history.push("Account");
              }
            })
            //history.push("Account");
    }

  return (
    // <div className="d-flex h-100 justify-content-center align-items-center" style={{height:"100%"}}>
    //      <div className="card" style={{width:"32%"}}>
    //         <img src={logo} className="card-img-top" style={{width:"100%"}}/>
    //     <div className="card-body">
    //     <form className={classes.root} noValidate autoComplete="off">
    //     <div className="row">
    //         <div className="col-lg-12" style={{padding:"0px"}}>
    //             <TextField id="outlined-basic" 
    //                 value={userName} 
    //                 onChange={(e) => setUserName(e.target.value)} 
    //                 label="Username" 
    //                 style={{width:"100%"}}/>
    //         </div>
    //     </div>
    //     <div className="row" style={{paddingTop:"2%"}}>
    //         <div className="col-lg-12" style={{padding:"0px"}}>
    //         <TextField id="outlined-basic" 
    //             value={password} 
    //             onChange={(e) => setPassword(e.target.value)} 
    //             label="Password" 
    //             style={{width:"100%"}}/>
    //         </div>
    //     </div>
    //     <div className="row" style={{paddingTop:"8%"}}>
    //         <div className="col-lg-12" style={{padding:"0px"}}>
    //         <Button variant="contained" color="secondary" style={{width:"100%"}} onClick={DoLogin}>
    //             Login
    //         </Button>
    //         </div>
    //     </div>
    //     </form>
    //     </div>
    //   </div>   
    // </div>
    <div className="container">
    <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <div id="login">
                <h3 className="text-center text-white pt-5">
                  <img src={logo} alt="" width="70%" className="text-center" title="" /></h3>
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-12">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" className="form" action="" method="post">

                                    <h3 className="text-info" style={{marginTop:"30px"}}>Login</h3>
                                    <p style={{marginBottom:"30px",fontWeight:600}}> Enter your details below to continue </p>
                                    <div className="form-group">
                                        <input type="text" placeholder="Username" name="username"
                                         value={userName} 
                                            onChange={(e) => setUserName(e.target.value)}  id="username" className="form-control" />
                                          {/* <TextField id="outlined-basic" value={userName} 
                                            onChange={(e) => setUserName(e.target.value)} 
                                            label="Username" 
                                            placeholder="Username"
                                            className="form-control"/> */}
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Password" name="password" id="password"
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)}  className="form-control" />
                                        {/* <TextField id="outlined-basic" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        label="Password" 
                                        placeholder="Password"
                                        className="form-control"/> */}
                                    </div>
                                    <div id="register-link" className="text-right">
                                        <a href="#" className="text-info" style={{textDecoration:"underline",fontSize:"13px"}}><i>Forgot Password </i></a>
                                        <br/>
                                        <br/>
                                    </div>
                                    <div className="form-group">
                                        {/* <input type="submit" name="submit" className="btn btn-info btn-md col-md-12" value="LOGIN" /> */}
                                        <Button variant="contained" color="secondary" className="btn btn-info btn-md col-md-12" onClick={DoLogin}>
                                        Login
                                    </Button>
                                    </div>
                                    <div className="form-group">
                                        <span><input id="remember-me" style={{top:"2px",position:"relative"}} name="remember-me" type="checkbox" /></span>&nbsp;
                                        <label for="remember-me" style={{fontSize:"13px"}} className="text-info"><span>Remember me</span> </label>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="col-md-4">

        </div>
       
        </div>
        </div>
  );
}

export default Login;
