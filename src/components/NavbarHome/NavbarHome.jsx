import * as React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import logo from './assets/SeeEventLogo.png';
import ButtonSignIn from './ButtonSignIn';
import ButtonSignUp from './ButtonSignUp';
import { Link } from 'react-router-dom';
import './NavbarHome.css';

const NavbarHome = () => {
  return (
    <AppBar position="relative" style={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ height: '90px', display: 'flex', justifyContent: 'space-between', marginLeft: 10.5, marginRight: 10.5 }}>
        <Link to="/" className="linkHome">
          <Box sx={{ display: 'flex' }}>
            <img src={logo} alt="logo" style={{ width: '75px' }} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: 'none', sm: 'block' },
                fontFamily: 'Helvetica',
                fontSize: '32px',
                fontStyle: 'italic',
              }}
            >
              See Event
            </Typography>
          </Box>
        </Link>
        <Box>
          <Link to="/signin">
            <ButtonSignIn />
          </Link>
          <Link to="/signup">
            <ButtonSignUp />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarHome;
