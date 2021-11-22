import  Button  from "@mui/material/Button";
// import { useHistory } from 'react-router-dom';


const ButtonSignIn = () => {

    // const history = useHistory();

    return (
        
            <Button                
                // href="/about" //coba link ke pages
                color="inherit"
                sx={{
                    // marginRight: '14px',
                    // marginLeft: '64px',
                    width: '90px',
                    height: '40px',
                    fontFamily:'Noto Sans',
                    fontSize: '18px',
                    textTransform: 'unset',
                    textDecoration: 'none',}}>
            Sign In
            </Button>
    )
}

export default ButtonSignIn

