import { Container, CssBaseline, Grid } from "@mui/material"
import DetailsSection from './Section/DetailsSection'
import CommentsSection from "./Section/CommentsSection";
import HeaderEvent from "./Header/HeaderEvent";
import HeaderPhoto from "./Header/HeaderPhoto";
import CreatedbySection from "./Section/CreatedbySection";




const EventDetail = () => {



    return (
       <> 
        <CssBaseline />
        <Container maxWidth="md" sx={{marginTop: '64px'}}>

            {/* headers */}
            <HeaderEvent/>
            <HeaderPhoto/>
          
            <Grid container spacing={2}
                sx={{marginTop: '31px'}}>
                {/* detail section */}
                <DetailsSection/>

                {/* section 'created by' */}
                <CreatedbySection/>
            </Grid>

                {/* section Comments */}
                <div>
                 
                <CommentsSection />
                </div>
                
                     
                
          
        </Container>
       </> 
    )
}
export default EventDetail