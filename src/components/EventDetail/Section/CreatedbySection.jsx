import { Grid, Box, Typography,Stack } from "@mui/material"
import ButtonShare from "../Button/ButtonShare"
import ButtonBookmark from "../Button/ButtonBookmark"
// import pratur from './../assets/Pratur.png'

const CreatedbySection = ({user}) => {
    return (
        <Grid item xs={6} >
            <Box sx={{display:'flex', justifyContent: 'center'}} >
                <img src={user?.image} alt="" />
                <Box>
                    <Typography 
                        sx={{
                            fontFamily: 'Noto Sans',
                            fontSize: '12px'
                        }} >
                            Created by
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Noto Sans',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }} >
                            {user?.firstName}
                    </Typography>
                </Box>
            </Box>
        
            {/* share bookmark */}
            <Stack direction="row" spacing={2} 
                sx={{
                    display:'flex', 
                    justifyContent: 'center',
                    marginTop: '23px'}}>

                <ButtonShare/>

                <ButtonBookmark/>
            </Stack>                    
        </Grid>
    )
}
export default CreatedbySection