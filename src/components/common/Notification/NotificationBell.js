import React, {useState} from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton } from '@mui/material';
import { Tooltip } from '@mui/material';
import BasicMenu from "../../common/BasicMenu/BasicMenu";

function NotificationBell({badgeContent, color}) {
    const newNotification = `You have ${badgeContent} new notifications`;
    const noNotification = `No new notifications`;
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(true);
    }

    const menuItems = [
      {
        id:1,
        label:"fist notif"
      },
      {
        id:2,
        label:"second notif"
      },
  ];


  return (
    <div>
    <Tooltip title={badgeContent !== '0' ? newNotification : noNotification}>
    <IconButton color="inherit" onClick={badgeContent != '0' ? handleOpen : null }>
    <Badge badgeContent={badgeContent} color={color}>
    <NotificationsIcon />
   </Badge>
   </IconButton>
   </Tooltip>
   <BasicMenu open={open} anchorEl={anchorEl} handleClose={handleClose} menuItems = {menuItems}/>
   </div>
  )
}

export default NotificationBell