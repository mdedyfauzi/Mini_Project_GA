import { Typography, Box } from "@mui/material"
import Calendar from './../assets/calendar.png'

const HeaderEvent = () => {
    return (
        <>
            <Typography
                variant = 'h3'  
                sx= {{
                    fontFamily: 'Noto sans',
                    fontWeight: 'bold',                    
                }} >          
                ESL Game: English on Your Feet! 
            </Typography>
            <Box sx={{display: 'flex', marginTop: '18.5px', }} >
                <img src={Calendar} alt=""  style={{width:'35px'}}/>
                <Typography 
                        sx={{
                            paddingTop: '5px',
                            fontFamily: 'Noto Sans'}}>
                        SUN, OCT 24 @ 1:15 AM ICT
                </Typography>
                <Box 
                    sx={{
                        padding: '7px', 
                        marginLeft: '24px',
                        width: '90px',
                        textAlign: 'center',
                        fontFamily: 'Noto Sans',
                        fontSize: '12px',
                        backgroundColor: '#F0F2E9',}} 
                    > Business 
                </Box> 
            </Box>
   </>
    )
}
export default HeaderEvent