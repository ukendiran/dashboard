import AddchartIcon from '@mui/icons-material/Addchart';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export   const draweritems = [
    {
        id: 1,
        path: "/",
        label: "Dashboard",
        icon: <SpaceDashboardIcon />
    },
    {
        id: 2,
        path: "/charts",
        label: "New Charts",
        icon: <AddchartIcon />
    },

]

export const drawer = (
    <div>
        <Toolbar />
        <Divider />
        <List>
            {draweritems.map((text, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {text.icon}
                        </ListItemIcon>
                        <ListItemText primary={text?.label} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>

    </div>
);


