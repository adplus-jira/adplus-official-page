import React from 'react';
import BasicLayout from '../components/BasicLayout';
import { Box, Typography } from '@mui/material';

export default function SuccessList() {

    return (
        <BasicLayout title={'SUCCESS EXAMPLE'} subTitle={'성공 사례'}>
            <Box paddingX={{ xs: 3, md: 50 }} paddingY={10}>
                <Typography variant='h1' textAlign='center' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 30, md: 30 }, marginBottom: '10px' }}>
                    플레이스 성공사례
                </Typography>
                <hr style={{ border: 'none', borderTop: '4px solid #5161b5', marginBottom: '20px', width: 100 }} />

                
            </Box>
        </BasicLayout>
    );
}