import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';



const CreateAccount =()=>{
    return(
        <Container maxWidth="">
<Grid container spacing={3}>
        <Grid item md={12}>
          <div className="mainContent"><h1>Create Account</h1></div>
        </Grid>
        </Grid>
        </Container>
    )
}

export default CreateAccount;