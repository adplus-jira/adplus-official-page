import React from 'react';
import logo from '../assets/img/logo.png'; // Import your logo image
import Box from '@mui/material/Box'; // Import Box component from Material-UI
import { Grid, Typography } from '@mui/material';

// 

const Footer = () => {
    return (
        <Box component="footer" sx={{ backgroundColor: '#2b2b2b', color: '#adadad', padding: '30px', marginTop: '57px' }}>
            <Grid container paddingX={{ xs: 5, md: 30 }} marginBottom={5}>
                <Grid item xs={12} md={6} lg={6}>
                    <img src={logo} alt="logo" style={{ width: '200px' }} />
                    <Box sx={{ fontSize: 14 }}>
                        <Typography fontSize={15} >
                            상호 : 애드플러스 | 대표 : 김용석 | 사업자등록번호 : 123-123-123<br />
                            주소 : 서울특별시 강서구 공항대로 213 619호<br />
                            이메일 : test@naver.com | 연락처 : 010-1234-1234
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <hr style={{ width: '80%' }} />
        </Box>
    );
};

export default Footer;
