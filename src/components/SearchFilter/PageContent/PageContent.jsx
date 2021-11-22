import { Pagination } from "@mui/material"


const PageContent = () => {
    return (
        <Pagination count={10} 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '95px'
                }}
            />
    )
}
export default PageContent