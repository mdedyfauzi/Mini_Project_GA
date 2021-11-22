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
import SetAvatar from './SetAvatar'

const Navbar = (props) => {
  const signInToken = localStorage.getItem('token');
  console.log(signInToken)
  const location = useLocation()
  console.log(location)
  //const Home = window.location.pathname === "/";

  const targetPages = {
    home : window.location.pathname === "/",
    account : window.location.pathname === "/account",
    search : window.location.pathname === "/search",
    detail : window.location.pathname === "/detail"
  };

  return (
    <AppBar 
    position= {targetPages.home ? 'absolute' : 'relative'}
    zIndex
    style={{ 
      background: (targetPages.home ? 'transparent' : '#214457'),
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
          {window.location.pathname === ("/search" || "/detail") ?  (
            <NavbarSearch />
            ) : null}
          <Box/>
          <Box sx={{ display:'flex', flexDirection:'row'}}>
          {window.location.pathname === "/account" ?  (
            <ButtonCreateEvent />
            ) : null}
            {window.location.pathname === "/account" ?  (
            <span className='divider'></span>
            ) : null}
          {signInToken === null || '' ? (
            <Box sx={{ xs: 'none', sm: 'flex' }}>
              <Link to="/signin">
              <ButtonSignIn />
              </Link>
              <Link to="/signup">
              <ButtonSignUp />
              </Link>
            </Box>
            ):(
              <Link to="/account">
            <Box sx={{ 
              xs: 'none', 
              display:'flex',  
              flexDirection: 'row',
              textJustify:'initial'
              }}>
                <SetAvatar />
                <Typography sx={{
                  fontWeight: 'bold',
                  fontSize: '16px',
                  marginTop:'auto',
                  marginBottom:'auto',
                  marginLeft:'16px'
                  }}>
                  Avatar
                </Typography>
            </Box>
            </Link>
            )}
            </Box>  
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;
