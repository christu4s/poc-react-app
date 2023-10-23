import React from 'react';

import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {mainNavbarItems} from '../Navbar/consts/NavBarItems';
import { useParams, useNavigate } from "react-router-dom";

const Navbar = () => {
    const drawerWidth = 220;
    const navigate = useNavigate();
  return (
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:'#101F33',
            color:'white',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
         
        <Divider />
        <List>
          {mainNavbarItems.map((item, index) => (
            <ListItem key={item.id} >
              <ListItemButton onClick={()=>{navigate(item.route)}}>
                <ListItemIcon sx={{color:'white'}}>
                {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  )
}

export default Navbar