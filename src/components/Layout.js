import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddchartIcon from '@mui/icons-material/Addchart';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert'; import InputBase from '@mui/material/InputBase';
import logo from "../assets/logo.png"
import NewCharts from './NewCharts';
import Dashboard from './Dashboard';
import { Route, Routes, useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
  
  
const drawerWidth = 240;








function MasterLayout(props) {

    const location = useLocation();


    const { window } = props;
    const [isClosing, setIsClosing] = React.useState(false);

    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);




    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };



    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };


    const menuId = 'primary-search-account-menu';

    const menuItems = [
        {
            id: 1,
            label: "Dashboard",
            path: "/",
            icon: <AddchartIcon />

        },
    ]


    const container = window !== undefined ? () => window().document.body : undefined;
 
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />



            <AppBar style={{ background: '#FFFDF9', boxShadow: 'none' }} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar variant='dense' disableGutters sx={{ marginLeft: "20px", inHeight: 60, height: 60 }}>
                    <IconButton
                        className="text-dark"
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={logo} alt="Logo" style={{ marginBottom: "5px", width: 130, height: 'auto', marginRight: 25 }} />

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' ,color:"black" }}>
                        Data Reconciliation Dashboard
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, color: "black" }}>


                        <IconButton className="me-2"
                            size="md"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>

            <Box
                component="nav"

                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={drawerOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={toggleDrawer}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <Toolbar />
                    <Divider />
                    <List  style={{paddingLeft:"10px !important"}}>
                        {menuItems.map((item, index) => {
                            const isActive = location.pathname === item.path;
                            const backgroundColor = isActive ? 'white' : "#387ADF";
                            console.log("backgroundColor", backgroundColor)
                            return (
                                <ListItem key={index} disablePadding sx={{ background: backgroundColor }}>
                                    <ListItemButton component={Link} to={item.path}>
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.label} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>

                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            backgroundColor: '#387ADF',
                            color: "white"
                        }
                    }}
                    open={drawerOpen}
                >
                    <Toolbar />
                    <Divider />
                    <List>
                        {menuItems.map((item, index) => {
                            const isActive = location.pathname === item.path;
                            const backgroundColor = isActive ? { backgroundColor: 'white', color: "black" } : { color: "white", backgroundColor: '#387ADF' };
                            console.log("backgroundColor", backgroundColor)
                            return (
                                <ListItem key={index} className="rounded-3 pb-1" disablePadding sx={{ backgroundColor }}>
                                    <ListItemButton component={Link} to={item.path}>
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.label} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>

                </Drawer>
            </Box>



            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Routes>
                    <Route path="" element={<Dashboard />}></Route>

                </Routes>
            </Box>
        </Box>
    );
}


export default MasterLayout;