import { Typography, Box } from "@mui/material";
import yoshua from './../assets/yoshua.png';
import agnes from './../assets/agnes.png';
import bambang from './../assets/bambang.png';
import InputComment from "../Input/InputComment";
import ButtonComment from "../Button/ButtonComment";

const CommentsSection = () => {
    return (
            <Box sx={{width: '600px'}}>    
                <Typography
                    sx={{
                    fontFamily: 'Noto Sans',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginTop: '48px'  
                    }}>
                    Comments
                </Typography>
                <Box sx={{display:'flex', marginTop: '32px'}} >
                    <img src={yoshua} alt="" />
                    <Box sx={{marginLeft: '16px'}}>
                        <Typography
                        sx={{
                            fontFamily: 'Noto Sans',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }} >
                            Yoshua Ginting
                        </Typography>
                        <Typography 
                        sx={{
                            fontFamily: 'Noto Sans',
                            fontSize: '12px'
                        }} >
                            4 Days ago
                        </Typography>
                    </Box>
                </Box>                
                <Typography sx={{marginTop: '16px', fontFamily: 'Noto Sans'}}>
                    Hi, do you have a youtube channel that I can subscribe?
                </Typography>

                <Box sx={{display:'flex', marginTop: '32px'}} >
                    <img src={agnes} alt="" />
                    <Box sx={{marginLeft: '16px'}}>
                        <Typography
                        sx={{
                            fontFamily: 'Noto Sans',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }} >
                            Agnes Mo
                        </Typography>
                        <Typography 
                        sx={{
                            fontFamily: 'Noto Sans',
                            fontSize: '12px'
                        }} >
                            4 Hours ago
                        </Typography>
                    </Box>
                </Box>                
                <Typography sx={{marginTop: '16px', fontFamily: 'Noto Sans'}}>
                    Hi pratur! I like your event, I already sent you an email about my upcoming event, could you hosted my event?
                </Typography>

                <Box sx={{display:'flex', marginTop: '32px'}} >
                    <img src={bambang} alt="" />
                    <Box sx={{marginLeft: '16px'}}>
                        <Typography
                        sx={{
                            fontFamily: 'Noto Sans',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }} >
                            Bambang Prakoso
                        </Typography>
                        <Typography 
                        sx={{
                            fontFamily: 'Noto Sans',
                            fontSize: '12px'
                        }} >
                            20 Minutes ago 
                        </Typography>
                    </Box>
                </Box>                
                <Typography sx={{marginTop: '16px', fontFamily: 'Noto Sans'}}>
                    Good Event!
                </Typography>

                <InputComment/>
                <ButtonComment/>
            </Box>
    )
}
export default CommentsSection