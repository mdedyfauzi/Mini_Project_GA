import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "./assets/SeeEventLogo.png";
import ButtonSignIn from "./ButtonSignIn";
import ButtonSignUp from "./ButtonSignUp";
import ButtonCreateEvent from "./ButtonCreateEvent";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavbarSearch from "./NavbarSearch";
import { useHistory } from "react-router";


const Navbar = () => {
  const history = useHistory();
  // const { location } = history;
  // const { pathname } = location;
  // console.log(history);

  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" sx={{ boxShadow: "none" }}>
        <Toolbar
          sx={{
            backgroundColor: "#214457",
            height: "90px",
          }}
        >
          <Box sx={{ marginRight: '88px' }} />

          <Link to="/">
            <Box sx={{ 
                    display: "flex", 
                    '&:hover': {
                      backgroundColor: '#214457',
                    }, }}>
              <img src={logo} alt="logo" style={{ width: "75px" }} />

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  flexGrow: 0.1,
                  marginLeft: '1px',
                  fontFamily: "Helvetica",
                  fontSize: "32px",
                  fontStyle: 'italic',
                  
                  
                }}
                
              >
                See Event
              </Typography>
            </Box>
          </Link>

          
          <NavbarSearch />
          

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ xs: "none", sm: "flex" }}>
            {/* coba nge-link */}            
            <ButtonSignIn onClick={() => history.push("/signin")} />
            <ButtonSignUp onClick={() => history.push("/signup")} />
            
            <ButtonCreateEvent/>
              
            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
