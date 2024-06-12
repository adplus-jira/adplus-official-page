import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../assets/img/logo_2.png';
import { useNavigate } from 'react-router-dom';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';


const menuItems = [
    { text: '회사소개', value: '/intro' },
    { text: '하는 일', value: '/work' },
    { text: '성공 사례', value: '/success' },
    { text: '자주 묻는 질문', value: '/qna' },
    { text: '문의하기', value: '/contact' },
]

function DrawerAppBar(props) {
    const { windows } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const navigation = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setScroll(scrollTop);
    }

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleKakaoTalkClick = () => {
        
    };

    const KakaoTalkButton = () => {
        return (
            <IconButton
                aria-label="KakaoTalk"
                onClick={handleKakaoTalkClick}
                sx={{
                    width: 50,
                    height: 50,
                    position: 'fixed',
                    bottom: '110px',
                    right: '50px',
                    zIndex: 9999,
                    borderRadius: '50%',
                    backgroundColor: 'rgb(27 36 80 / 70%)',
                    padding: '10px',
                    transition: 'all 1s',
                    opacity: scroll > 100 ? 1 : 0,
                    display: scroll > 100 ? 'block' : 'none',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#3e53bd'
                    }
                }}
            >
                <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" alt="kakao" style={{ width: '100%' }} />
            </IconButton>
        );
    };

    const ScrollToTopButton = () => {
        return (
            <IconButton
                aria-label="scroll to top"
                onClick={handleScrollToTop}
                sx={{
                    width: 50, height: 50,
                    position: 'fixed',
                    bottom: '50px',
                    right: '50px', zIndex: 9999, 
                    borderRadius: '50%', 
                    backgroundColor: 'rgb(27 36 80 / 70%)', 
                    padding: '10px', 
                    transition: 'all 1s', 
                    opacity: scroll > 100 ? 1 : 0, 
                    display: scroll > 100 ? 'block' : 'none', 
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#3e53bd'
                    }
                }}
            >
                <KeyboardDoubleArrowUpIcon />
            </IconButton>
        );
    };



    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { capture: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <img src={Logo} style={{ width: '150px', filter: 'invert(1)' }} alt='logo' />
            <Divider />
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.value} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigation(`${item.value}`)}>
                            <ListItemText >
                                <Typography variant={'h2'} color={'#333'} fontSize={18}>{item.text}</Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = windows !== undefined ? () => windows().document.body : undefined;
    // rgb(62 83 189)
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ bgcolor: scroll ? '#1b2450' : 'transparent', transition: 'all .5s ease', borderBottom: '1px solid #e5e5e5' }} position='fixed' >
                <Toolbar sx={{
                    width: '100%', xs: {
                        paddingX: '0px'
                    }, md: { paddingX: '100px !important' }
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />

                    </IconButton>
                    <Box sx={{ display: { xs: 'block', sm: 'none' }, width: '100%', margin: 'auto', textAlign: 'center' }} >
                        <img src={Logo} alt='logo' width={'150px'} style={{ margin: 'auto', display: 'flex', cursor: 'pointer' }} onClick={() => navigation("/")} />
                    </Box>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontFamily: 'KboGothic_B !important' }}
                    >
                        <img src={Logo} alt='logo' style={{ height: scroll ? '70px' : '100px', transition: 'all .5s ease', cursor: 'pointer' }} onClick={() => navigation("/")} />
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {menuItems.map((item) => (
                            <Button key={item.value} sx={{ color: '#e2e2e2', fontFamily: 'KboGothic_M', fontSize: 19, mr: 4 }} onClick={() => navigation(`${item.value}`)}>
                                {item.text}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '300px' },
                        fontFamily: 'KboGothic_B !important'
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <KakaoTalkButton />
            <ScrollToTopButton />
        </Box>
    );
}

DrawerAppBar.propTypes = {
    windows: PropTypes.func,
};

export default DrawerAppBar;