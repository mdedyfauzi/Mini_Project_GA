import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from './assets/logo1.png'
import ButtonSignIn from './ButtonSignIn';
import ButtonSignUp from './ButtonSignUp';



const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        sx={{boxShadow: 'none'}}>
        <Toolbar 
            sx={{
                backgroundColor: '#214457',
                height: '90px',                
            }}>
          <img 
            src={logo} alt="logo"
            style={{ marginLeft: '112px' }} />                          
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              marginLeft: 2,
              fontFamily: 'Open Sans',
              fontSize: '32px'}}>
            See Event
          </Typography>
          <ButtonSignIn/>
          <ButtonSignUp/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar




