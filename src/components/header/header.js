import React,{ useState } from 'react';
import './header.css';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
function Header() {
    let history = useHistory();
    const classes = useStyles();

    const Logout = ()=>{
        history.push("/");
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark headerStyle">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
      </ul>
      <div className="row justify-content-center">
        <div className="col-lg-12">
            <div className="nav-item dropdown">
                <a className="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div className="d-flex flex-row bd-highlight" >
                        <div className="p-2 bd-highlight">
                        </div>
                        <div className="p-2 bd-highlight" style={{marginBottom:"0px!important"}}>
                        {/* <Icon style={{ color: "white" }}>add_circle</Icon> */}
                        {/* <IconButton color="secondary" aria-label="Signout" onClick={Logout}>
                            <Icon style={{ color: "white" }}>add_circle</Icon>
                            Signout
                        </IconButton> */}
                        {/* <Button variant="contained" color="secondary" style={{width:"100%"}} onClick={Logout}>
                            Signout
                        </Button> */}
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<Icon style={{ color: "white" }}>power_settings_new</Icon>}
                            onClick={Logout}
                        >
                            Signout
                        </Button>
                        </div>
                      </div>
                  </a>
              </div>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Header;
