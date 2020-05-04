import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import InsertChartOutlinedTwoToneIcon from '@material-ui/icons/InsertChartOutlinedTwoTone';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import {Link} from "react-router-dom";
import "./sidebar.css";


const useStyles = makeStyles({
    root: {
     
      
    },
  });

const Sidebar = ()=> {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Paper square className="sideBar">
      
        <Tabs
        classname="sidebar"
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
               
          <Tab icon={<DashboardOutlinedIcon />}  to="/" label="Dashboard" component={Link}/>
          <Tab icon={<PersonOutlineOutlinedIcon />}  to={{pathname:"/myaccounts"}} component={Link} label="my account" />
          <Tab icon={<PersonAddOutlinedIcon />} to={{pathname:"/CreateAccount"}} component={Link} label="create account" />
          <Tab icon={<InsertChartOutlinedTwoToneIcon />} to={{pathname:"/Statistics"}} component={Link} label="statistics" />
          <Tab icon={<SettingsOutlinedIcon />} label="settings" />
          <Tab icon={<GroupAddOutlinedIcon />}  to={{pathname:"/UserTable"}} component={Link} label="User Management" />
          <Tab icon={<ExitToAppOutlinedIcon />} label="logout" />
        </Tabs>
      </Paper>
    );
  }
export default Sidebar;