import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Button } from '@mui/material';

const ButtonComment = () => {
    return (
        <Button 
        variant="contained" 
        startIcon={<ChatBubbleOutlineIcon />}
        sx={{ 
            color: "white",
            marginTop: '16px',
            padding: '10px',
            backgroundColor: '#214457',
            border: '3px solid',
            borderRadius: '30px',
            fontFamily: 'Noto Sans',
            boxShadow: 'none',
            width: '184px',
            marginLeft: '320px',
            textTransform: 'unset',
            '&: hover': {
                boxShadow: 'none',
                backgroundColor: '#4d6978'
            } }}> 
        Submit
    </Button>
    )
}
export default ButtonComment