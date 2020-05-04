import React,{ useState } from 'react';
import './home.css';
import Header from '../header/header';

function Home() {

  return (
    <div className="container-fluid" style={{padding:"0px"}}>
        <Header/>
        <div className="row">
            <div className="col-lg-12">
                <div className="container" style={{textAlign:"center",paddingTop:"10%"}}>
                    Home Page
                </div>
            </div>
        </div>
    </div>
      
  );
}

export default Home;
