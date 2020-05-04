import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import "./UserRegistration.css"



const UserRegistration =()=>{
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return(
        <Container maxWidth="">
            <Grid container >
        <Grid item md={12}>
          <div className="mainContent"><h1>User registration</h1></div>
        </Grid>
        </Grid>
             <Paper elevation={3} className="paper">
<Grid container>
       
        <Container maxWidth="md">
           
        <form className="field" noValidate autoComplete="off">
        <Grid container spacing={3}>
        <Grid item sm={6}>
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        </Grid>
        <Grid item sm={6}>
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item sm={6}>
        <TextField id="outlined-basic" label="Email Address" variant="outlined" />
        </Grid>
        <Grid item sm={6}>
        <TextField id="outlined-basic"  type="number" label="Mobile Number" variant="outlined" />
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item sm={6}>
        <TextField id="outlined-basic" type="password" label="Password" variant="outlined" />
        </Grid>
        <Grid item sm={6}>
        <TextField id="outlined-basic" type="password" label="Confrim Password" variant="outlined" />
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item sm={6}>
        <FormControl variant="outlined" className="select">
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        
        </Grid>
        <Grid container spacing={3}>
        <Grid item sm={12}>
        <Button variant="contained" color="primary">
  Create User
</Button>
        </Grid>
        </Grid>
        
    </form>
    
    </Container>
       
        </Grid>
        </Paper>
        </Container>
    )
}

export default UserRegistration;