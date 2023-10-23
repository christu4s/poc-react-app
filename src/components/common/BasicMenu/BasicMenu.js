import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function BasicMenu({anchorEl, open, handleClose, menuItems}) {
    return (
    <div>
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
     
      {menuItems.map((item)=> {
        return <MenuItem onClick={handleClose}>{item.label}</MenuItem>
      })}
    </Menu>
  </div>
  )
}

export default BasicMenu