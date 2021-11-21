import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
  
const CreateEvent = styled(Button) (() => ({
    color: '#373737',
    padding: '10px',
    width: '184px',
    fontWeight: 'bold',
    borderRadius: '30px',
    backgroundColor: '#F2D555',
    textTransform: 'unset',
    marginRight: '30px',
    marginLeft: '10px',
    boxShadow: 'none',
    
    
    '&:hover': {
      backgroundColor: '#f4dd77',
    },
  }));
  
  export default function ButtonCreateEvent() {
    const history = useHistory();
    return (      
        <CreateEvent variant="contained" onClick={() => history.push("/detail")}>Create Event</CreateEvent>        
    );
  }