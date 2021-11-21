import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Box, Typography } from '@mui/material';
import { useHistory } from 'react-router';
  
const EventCategory = styled(Button) (() => ({
    color: '#214457',
    border: '1px solid #214457',
    padding: '10px',
    width: '184px',
    fontWeight: 'bold',
    borderRadius: '30px',
    backgroundColor: 'white',
    textTransform: 'unset',
    marginRight: '16px',    
    boxShadow: 'none',
    
    
    '&:hover': {
      backgroundColor: '#f4dd77',
      boxShadow: 'none'
    },
    
  }
  ));
  
  export default function ButtonCategory() {
      const history = useHistory();
    return (
        <>
        <CssBaseline/>
        <Container maxWidth="100%" sx={{marginTop: '80px', backgroundColor: '#ECEEEF', paddingBottom: '80px'}}>
            <Typography sx={{textAlign:'center', fontSize: '40px', fontWeight: 'bold', paddingTop: '80px'}}> 
                Explore event by Category
            </Typography>
            <Box sx={{display: 'flex', alignItems:"center", justifyContent:'center', marginTop: '48px'}}>       
                <EventCategory variant="contained" onClick={() => history.push("")}>Photography</EventCategory>
                <EventCategory variant="contained">Design</EventCategory>
                <EventCategory variant="contained">Development</EventCategory>
                <EventCategory variant="contained">Marketing</EventCategory>
            </Box>
            <Box sx={{display: 'flex', alignItems:"center", justifyContent:'center', marginTop: '24px'}}>       
                <EventCategory variant="contained">Business</EventCategory>
                <EventCategory variant="contained">Lifestyle</EventCategory>
                <EventCategory variant="contained">Music</EventCategory>            
            </Box>
        </Container>     
        </>   
    );
  }