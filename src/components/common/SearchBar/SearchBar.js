import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
const SearchBar = ({placeholder, onchange, SearchBarWidth}) => {
    
  return (
    <Box sx={{display:'flex', alignItems:'center'}}>
        <SearchIcon />
        <input placeholder={placeholder} onChange={onchange} style={{width:"620px",fontSize:'14px',color:'rgb(0,0,0,0.6)'}}/>
    </Box>
  )
}

export default SearchBar