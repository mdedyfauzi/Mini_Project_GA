import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const ButtonSignOut = () => {
  return (
    <>
      <Button 
        variant="outlined" 
        startIcon={<LogoutIcon />} 
        sx={{ fontFamily: 'Noto ,Sans', color: '#214457', borderColor: '#214457' }}>
        Sign Out
      </Button>
    </>
  );
};

export default ButtonSignOut;
