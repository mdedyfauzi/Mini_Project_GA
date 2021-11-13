import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const NavbarSearch = () => {
  return (
    <Box  
    sx={{ 
        p: '1px', 
        border: '2px solid white', 
        borderRadius: 10, 
        marginTop: '5px', 
        width: '20%',
        marginRight: '20%',
        backgroundColor: 'white' }}>      
      <IconButton type="submit"  >
        <SearchIcon  />
      </IconButton>
      <InputBase
        sx={{ ml: 1, width: '75%',}}
        placeholder="Search events"       
      />      
    </Box>
  );
}
export default NavbarSearch