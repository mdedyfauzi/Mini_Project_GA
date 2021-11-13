import  Button  from "@mui/material/Button";
// import { useHistory } from 'react-router-dom';


const ButtonSignIn = () => {

    // const history = useHistory();

    return (
        
            <Button                
                // href="/about" //coba link ke pages
                color="inherit"
                sx={{
                    marginRight: '24px',
                    fontFamily:'Noto Sans',
                    fontSize: '18px'}}>
            Sign In
            </Button>
    )
}

export default ButtonSignIn

