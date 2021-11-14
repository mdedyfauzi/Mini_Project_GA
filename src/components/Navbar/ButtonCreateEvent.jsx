import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
  
const ColorButton = styled(Button) (() => ({
    color: '#373737',
    padding: '10px',
    width: '184px',
    fontWeight: 'bold',
    borderRadius: '30px',
    backgroundColor: '#F2D555',
    textTransform: 'unset',
    marginRight: '30px',
    marginLeft: '10px',
    
    // boxShadow: '#F2D555',
    '&:hover': {
      backgroundColor: '#f4dd77',
    },
  }));
  
  export default function CustomizedButtons() {
    return (      
        <ColorButton variant="contained">Create Event</ColorButton>        
    );
  }