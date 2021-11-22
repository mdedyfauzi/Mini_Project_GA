import Button from '@mui/material/Button';

const ButtonSignUp = () => {
    return (
        <Button 
            color="inherit"
            sx={{
                marginRight: '10px',
                width: '90px',
                height: '40px',
                fontFamily:'Noto Sans',
                fontSize: '18px',
                textTransform: 'unset',
                paddingRight: 0,
                marginRight:0
                }}>
        Sign Up
        </Button> 
    )
}

export default ButtonSignUp