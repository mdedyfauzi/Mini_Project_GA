import { Button } from '@mui/material';

const ButtonLog = ({ text }) => {
  return (
    <>
      <Button  
        variant="contained" 
        type="submit"
        sx={{ backgroundColor: '#214457', height: 56 }}
        fullWidth
      >
      {text}
      </Button>
    </>
  );
};

export default ButtonLog;
