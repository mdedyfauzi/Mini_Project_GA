import { Button } from "@mui/material"
import ShareIcon from '@mui/icons-material/Share';


const ButtonShare = () => {
    return (
        <Button
            variant="outlined"
            startIcon={<ShareIcon />}
            sx={{ 
                color: "#214457",
                border: '3px solid',
                fontFamily: 'Noto Sans',
                textTransform: 'unset'
            }}
        >               
            Share
        </Button>                                
    )
}
export default ButtonShare