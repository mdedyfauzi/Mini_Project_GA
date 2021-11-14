import { Container, Typography, Stack, Pagination } from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline';
import CategoryFilter from "./Category/CategoryFilter";
import FilterDate from "./Date/DateFilter";
import SortFilter from "./Sorting By/SortFilter";


const SearchFilter = () => {



    return (
        <>
        <CssBaseline />
        <Container maxWidth="lg" sx={{marginTop: '64px', }}>
            <Typography sx={{
                fontWeight: 'bold',
                fontSize: '20px',
                fontFamily: 'Noto Sans',
            }}> 
                Showing 68 Results for “How to”
            </Typography>

            {/* filter date, category, sort by.. */}
            <Stack direction="row" spacing={3} sx={{marginTop: '24px'}}>

                {/* filter by date */}
                <FilterDate/>

                {/* filter by category */}
                <CategoryFilter/>

                {/* sorting by..  */}
                <SortFilter/>
            </Stack>
            <Pagination count={10} 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '95px'
                }}
            />
        </Container>
      </>
    )
}
export default SearchFilter