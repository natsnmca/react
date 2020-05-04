import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Login from './components/login/login';
import Login from './components/loginnew/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/home';
import Account from './components/account/account';
import LandingPage from './components/landingPage';

let username = JSON.parse(localStorage.getItem("user"));
function App() {
  return (
    <Router basename="/BWIAPP">
      <Route path="/" exact component={Login} />
      <Route path="/Home" component={Home} />
      <Route path="/LandingPage" component={()=>
<LandingPage
username={username.NameEn}
/>


      }/>
    </Router>
    // <div className="App" style={{height:"100%"}}>
    //   <Login/>
    // </div>
  );
}

export default App;
