import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from './assets/SeeEventLogo.png'
import ButtonSignIn from './ButtonSignIn';
import ButtonSignUp from './ButtonSignUp';
import ButtonCreateEvent from './ButtonCreateEvent';
import { Link } from 'react-router-dom';
import './Navbar.css'
import NavbarSearch from './NavbarSearch';




const Navbar = () => {


  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="relative"
        sx={{boxShadow: 'none'}}>
          
        <Toolbar 
            sx={{
                backgroundColor: '#214457',
                height: '90px',                
            }}>
            
            <Box sx={{ flexGrow: 0.2 }} />
            
            <Link to='/about' className='linkHome'>
            <Box sx={{display: 'flex'}}>     
            <img src={logo} alt="logo" style={{width: '75px'}} />
                                      
            <Typography 
              variant="h6"
              noWrap 
              component="div" 
              sx={{
                display: { xs: 'none', sm: 'block' }, 
                flexGrow: 0.1,
                marginLeft: 1,
                fontFamily: 'Open Sans',
                fontSize: '32px'}}>
              See Event
            </Typography>
            </Box> 
            </Link>    
            <NavbarSearch/>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ xs: 'none', sm: 'flex' }}>
              
              {/* coba nge-link */}
              <Link to='/about'>
                <ButtonSignIn/>
              </Link>

              <Link to='/about'>
                <ButtonSignUp/>
              </Link>

              <Link to='/about'>
                <ButtonCreateEvent/>
              </Link>   
            </Box>

        </Toolbar>
        
      </AppBar>
    </Box>
  );
}

export default Navbar




