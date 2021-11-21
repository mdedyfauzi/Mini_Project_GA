import { Typography, Container, CssBaseline } from '@mui/material'
import image from './assets/undraw_not_found_-60-pq 1.png'

const CantFind = () => {
    return (
        <>
        <CssBaseline />
        <Container maxWidth="sm" sx={{marginTop: '58px', }}>
            <p style={{textAlign: 'center'}}><img src={image} alt="" /></p>
            <Typography sx={{fontFamily: 'Noto Sans', textAlign: 'center', marginTop: '32px' }}>
                sorry we couldn't find any events for this search.
            </Typography>
        </Container>
        </>
    )
}
export default CantFind