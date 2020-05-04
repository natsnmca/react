import React from "react";
import logo from '../../../../assets/images/logo.png';


const HeaderLogo=()=>{
    return(
        <React.Fragment>
            <div className="headLogo">
            <img src={logo} alt="logo"  className="text-center" title="" />
            </div>
        </React.Fragment>
    )
}

export default HeaderLogo;