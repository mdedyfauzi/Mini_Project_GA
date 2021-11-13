import { Box, Container, CssBaseline, Typography } from "@mui/material"
import Calendar from './assets/calendar.png'
import EventImg from './assets/unsplash_rxpThOwuVgE.png'

const EventDetail = () => {
    return (
       <> 
        <CssBaseline />
        <Container maxWidth="md" sx={{marginTop: '64px'}}>
           <Typography
                variant = 'h3'  
                sx= {{
                    fontFamily: 'Noto sans',
                    fontWeight: 'bold',                    
                }}           
           > ESL Game: English on Your Feet! 
           </Typography>
           <Box sx={{display: 'flex', marginTop: '18.5px', }} >
               <img src={Calendar} alt=""  style={{width:'35px'}}/>
           <Typography sx={{paddingTop: '5px'}}>
                SUN, OCT 24 @ 1:15 AM ICT
           </Typography>
           <Box 
            sx={{
                padding: '5px', 
                marginLeft: '24px',
                width: '90px',
                textAlign: 'center',
                backgroundColor: '#F0F2E9',}} 
                > Business 
            </Box> 
           </Box>
           <img src={EventImg} alt="" style={{marginTop: '22px'}} />
          <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        </Container>
       </> 
    )
}
export default EventDetail