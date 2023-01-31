import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import { Link } from 'react-router-dom';
const pages = ['products'];

function ResponsiveAppBar() {
    const handleOpenNavMenu = () => {};

    const handleOpenUserMenu = () => {};

    // const handleCloseNavMenu = () => {};

    // const handleCloseUserMenu = () => {};

    return (
        <AppBar position="static">
            {/* PC */}
            <Container sx={{ display: { xs: 'none', md: 'flex' } }} maxWidth="xl" disableGutters>
                <Toolbar sx={{ width: '100%' }} disableGutters>
                    <Link to="/">
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <StoreMallDirectoryIcon
                                sx={{
                                    mr: 1,
                                    fontSize: '3rem',
                                    color: 'white',
                                }}
                            />
                            <Typography
                                sx={{
                                    mr: 2,
                                    fontSize: '3rem',
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                            >
                                MALL.
                            </Typography>
                        </Box>
                    </Link>

                    <Box sx={{ flex: 1, display: 'flex' }}>
                        {pages.map((page) => (
                            <Link to={`/${page}`} key={page}>
                                <Button
                                    sx={{
                                        my: 2,
                                        mx: 2,
                                        color: 'white',
                                        display: 'block',
                                        fontSize: '1.8rem',
                                    }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flex: 0 }}>
                        <Link to="/auth">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>

            {/* MOBILE */}
            <Container sx={{ display: { xs: 'flex', md: 'none' } }} maxWidth="xl" disableGutters>
                <Toolbar sx={{ width: '100%' }} disableGutters>
                    <Box>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ color: 'white', fontSize: '3rem' }} />
                        </IconButton>
                    </Box>

                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        ,
                        <StoreMallDirectoryIcon
                            sx={{
                                mr: 1,
                                fontSize: '2rem',
                                color: 'white',
                            }}
                        />
                        <Typography
                            sx={{
                                mr: 2,
                                fontSize: '2rem',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            MALL.
                        </Typography>
                    </Box>

                    <Box sx={{}}>
                        <IconButton
                            onClick={handleOpenUserMenu}
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
