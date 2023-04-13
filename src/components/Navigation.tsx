import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Twitter from '@mui/icons-material/Twitter';
import MoreIcon from '@mui/icons-material/MoreVert';
import { NavLink } from "react-router-dom";

export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <NavLink
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#02c692" : ""
                        };
                    }} to="/">
                    Home
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#02c692" : ""
                        };
                    }}
                    to="/games">
                    IOTABOTS
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#02c692" : ""
                        };
                    }}
                    to="/spacebots">
                    Spacebots
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#02c692" : ""
                        };
                    }}
                    to="/soonabots">
                    Soonabots
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#02c692" : ""
                        };
                    }}
                    to="/info">
                    Info
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#02c692" : ""
                        };
                    }}
                    to="/profile">
                    Profile
                </NavLink>
            </MenuItem>
            <MenuItem

            >
                <IconButton
                    target="_blank"
                    href="https://twitter.com/iotabots"
                    size="large"
                    aria-label="show 1 new tweets"
                    color="inherit"
                >
                    <Badge badgeContent={1} color="error">
                        <Twitter />
                    </Badge>
                </IconButton>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'block', sm: 'block' } }}
                    >
                        <NavLink
                            className="nav-link" to="/">
                            IOTABOTS
                        </NavLink>
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <NavLink
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "#02c692" : ""
                                };
                            }}
                            className="nav-link" to="/">
                            Home
                        </NavLink>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        |
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <NavLink
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "#02c692" : ""
                                };
                            }}
                            className="nav-link" to="/games">
                            IOTABOTS
                        </NavLink>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        |
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <NavLink
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "#02c692" : ""
                                };
                            }}
                            className="nav-link" to="/spacebots">
                            Spacebots
                        </NavLink>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        |
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <NavLink
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "#02c692" : ""
                                };
                            }}
                            className="nav-link" to="/soonabots">
                            Soonabots
                        </NavLink>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        |
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <NavLink
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "#02c692" : ""
                                };
                            }}
                            className="nav-link" to="/info">
                            Info
                        </NavLink>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        |
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <NavLink
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "#02c692" : ""
                                };
                            }}
                            className="nav-link" to="/profile">
                            Profile
                        </NavLink>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton target="_blank" href="https://twitter.com/iotabots" size="large" aria-label="twitter" color="inherit">
                            <Badge badgeContent={1} color="error">
                                <Twitter />
                            </Badge>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}