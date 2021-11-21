import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from './assets/SeeEventLogo.png';
import ButtonSignIn from './ButtonSignIn';
import ButtonSignUp from './ButtonSignUp';
import ButtonCreateEvent from './ButtonCreateEvent';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import NavbarSearch from './NavbarSearch';
import setAvatar from '../Avatar/Avatar';

const Navbar = () => {
  const signInToken = localStorage.getItem('token');
  console.log(signInToken)
  const location = useLocation()
  console.log(location)
  const Home = window.location.pathname === "/";
  return (
    <AppBar 
    position= {Home ? 'absolute' : 'relative'}
    zIndex
    style={{ 
      background: (Home ? 'transparent' : '#214457'),
      boxShadow: 'none',
      }}>
      <Toolbar sx={{ 
        height: '90px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginLeft: 10.5, 
        marginRight: 10.5 
        }}>
          <Link 
            to="/" 
            className="linkHome">
            <Box sx={{ display: 'flex' }}>
              <img 
                src={logo} 
                alt="logo" 
                style={{ width: '75px' }} 
                />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  flexGrow: 0.1,
                  marginLeft: 1,
                  fontFamily: 'Open Sans',
                  fontSize: '32px',
                }}
              >
                See Event
              </Typography>
            </Box>
          </Link>
          <NavbarSearch />
          <Box/>
          {signInToken === '' ? (
            <Box sx={{ xs: 'none', sm: 'flex' }}>
              <Link to="/signin">
              <ButtonSignIn />
              </Link>
              <Link to="/signup">
              <ButtonSignUp />
              </Link>
            </Box>
            ):(
            <Box sx={{ xs: 'none', sm: 'flex' }}>
              <setAvatar/>
              <Typography>Avatar</Typography>
            </Box>
            )}
            <Link to="/about">
              <ButtonCreateEvent />
            </Link>  
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;