import { Grid, Typography } from "@mui/material"


const DetailsSection = ({detail}) => {
    return (
                <Grid item xs={6}>
                    <Typography
                        variant = 'p'
                        sx={{                            
                            fontFamily: 'Noto Sans',
                            fontWeight: 'bold',
                            fontSize: '24px'
                        }} >
                        Details
                    </Typography>
                    <Typography
                    sx={{
                        marginTop: '16px',
                        fontWeight: '400px',
                        width: '500px',
                        fontFamily: 'Noto Sans'}}  >
                        {detail}
                    </Typography>
                </Grid>

    )
}

export default DetailsSection