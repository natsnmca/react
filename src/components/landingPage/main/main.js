import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Sidebar from "../sidebar/sidebar";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from "./dashboard/dashboard";
import MyAccounts from "./myaccounts/myaccounts";
import CreateAccount from "./createAccount/createAccount";
import Statistics from "./statistics/statistics";
import UserRegistration from "./userRegistration/UserRegistration";
import UserTable from "./userRegistration/usertable";

const Main=()=>{
    return(
       <React.Fragment>
           
            <div className="main">
            
       <Sidebar></Sidebar>

        <Switch>          
          
          <Route path="/myaccounts" component={MyAccounts}>
           
          </Route>
          <Route path="/CreateAccount" component={CreateAccount}>
           
          </Route>
          <Route path="/Statistics" component={Statistics}>
           
          </Route>
          <Route path="/UserTable" component={UserTable}>
           
           </Route>
          <Route path="/" component={Dashboard}>
            
          </Route>
        </Switch>
       
          
           
       </div>
       

       </React.Fragment>
        
   
    )
}
export default Main;