import React from 'react';
import UserMenu from "./userMenu/userMenu";
import HeaderLogo from "./headerLogo/headerLogo";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const Header=(props)=>{
    return(
        <React.Fragment>
            <Paper className="noBorderRadius">
            <Container maxWidth="">
            <Grid container >
        <Grid item md={6}>
        <HeaderLogo></HeaderLogo>
        </Grid>
        <Grid item md={6} className="userGrid">
        <UserMenu username={props.username}></UserMenu>
        </Grid>
        </Grid>
        </Container>
            </Paper>

        </React.Fragment>
    )
}

export default Header;