import { Grid, Typography, Box } from '@mui/material';
import logo2 from './assets/logo2.png';
import Facebook from './assets/Facebook.svg';
import Instagram from './assets/Instagram.svg';
import Twitter from './assets/Twitter.svg';
import Youtube from './assets/Youtube.svg';
import './Footer.css';

const Footer = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: '#214457',
        height: '100%',
        paddingTop: '48px',
        paddingBottom: '20px',
        marginTop:'0px'
      }}
    >
      <Grid item xs={3}>
        <Box sx={{ display: 'flex', width: '100%', height: '50px', marginLeft: '112px' }}>
          <img src={logo2} alt="" />
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Open Sans',
              fontSize: '32px',
              color: '#F2D555',
              marginLeft: '10px',
            }}
          >
            See Event
          </Typography>
        </Box>
        <Box
          sx={{
            width: '400px',
            marginLeft: '112px',
            paddingTop: '30px',
          }}
        >
          <Typography variant="p" sx={{ color: '#F8F8F8', fontFamily: 'Noto Sans' }}>
            SeeEvent is a platform where you can create or find an amazing events around the world.
          </Typography>

          <Typography sx={{ marginTop: '32px', color: '#FFFFFF', fontFamily: 'Noto Sans' }}>Follow Us on</Typography>
          <Box sx={{ marginTop: '6px' }}>
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Twitter} alt="" />
            <img src={Youtube} alt="" />
          </Box>
          <Box sx={{ marginTop: '30px' }}>
            <Typography variant="p" sx={{ color: '#F8F8F8', fontFamily: 'Noto Sans' }}>
              © 2021 SeeEvent All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ marginLeft: '290px' }}>
          <Typography
            variant="p"
            sx={{
              color: '#FFFFFF',
              fontFamily: 'Noto Sans',
              fontWeight: 'Bold',
              fontSize: '18px',
            }}
          >
            Links
          </Typography>
          <Box sx={{ marginTop: '16px', width: '200px' }}>
            <li>Home</li>
            <li>Explore</li>
            <li>My Events</li>
            <li>Bookmarks</li>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ marginLeft: '110px' }}>
          <Typography
            variant="p"
            sx={{
              color: '#FFFFFF',
              fontFamily: 'Noto Sans',
              fontWeight: 'Bold',
              fontSize: '18px',
            }}
          >
            Top Categories
          </Typography>
          <Box sx={{ marginTop: '16px' }}>
            <li>Design</li>
            <li>Photography</li>
            <li>Development</li>
            <li>Marketing</li>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box>
          <Typography
            variant="p"
            sx={{
              color: '#FFFFFF',
              fontFamily: 'Noto Sans',
              fontWeight: 'Bold',
              fontSize: '18px',
            }}
          >
            Contact Us
          </Typography>
          <Typography
            sx={{
              marginTop: '16px',
              fontFamily: 'Noto Sans',
              color: '#F8F8F8',
            }}
          >
            Indonesia <br />
            Jl. Planet Namek No. 123, Surabaya <br />
            Telp : 083849420146 <br />
            Email : Johndoe@seeevent.com
          </Typography>
          <Box
            sx={{
              marginTop: '115px',
              display: 'flex',
            }}
            className="foot-bottom-right"
          >
            <Typography>Privacy Policy</Typography>
            <Typography>Terms of Service</Typography>
            <Typography>Helps</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
