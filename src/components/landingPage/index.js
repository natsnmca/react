import React from "react";
import Main from "./main/main";
import Header from "./header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const LandingPage=(props)=>{
    return(
        <Router> 
            <React.Fragment>
            <Header username={props.username}></Header>
                <Main></Main>
            </React.Fragment>
      
    </Router>
    )
}
export default LandingPage;