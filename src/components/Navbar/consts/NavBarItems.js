import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import PublicIcon from '@mui/icons-material/Public';

export const mainNavbarItems = [{
    id:0,
    icon:<PeopleIcon />,
    label:'Authendication',
    route:'authendication',
},
{
    id:1,
    icon:<StorageIcon />,
    label:'Database',
    route:'database',
},
{
    id:2,
    icon:<WarehouseIcon />,
    label:'Storage',
    route:'storage',
},
{
    id:3,
    icon:<PublicIcon />,
    label:'Hosting',
    route:'hosting',
}

];