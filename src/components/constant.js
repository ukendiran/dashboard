import AddchartIcon from '@mui/icons-material/Addchart';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

export const menuItems = [{
    id: 1,
    label: "Dashboard",
    path: "/",
    icon: <SpaceDashboardIcon />

},
{
    id: 2,
    label: "MUI Chart",
    path: "/new-chart",
    icon: <AddchartIcon />

},
{
    id: 3,
    label: "Apex Charts",
    path: "/apex-chart",
    icon: <AddchartIcon />

},
]

export const drawer = (
    <div>
        <Toolbar />
        <Divider />
        <List>
            {menuItems.map((text, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton component={Link} to={text.path}>
                        <ListItemIcon>
                            {text.icon}
                        </ListItemIcon>
                        <ListItemText primary={text.label} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>

    </div>
);


