import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import BasicLayout from '../components/BasicLayout';
import { Grid } from '@mui/material';
import TestImg from '../assets/img/main_1.png';
import { TextField, Button } from '@mui/material';

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <BasicLayout title={'Contact Us'} subTitle={'문의하기'}>
            <Box paddingX={{ xs: 3, md: 30 }} paddingY={10} maxWidth={2000} margin={'auto'}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box textAlign={'left'}>
                            <img src={TestImg} alt="test" style={{ width: '100%', maxWidth: '400px', height: '400px', margin: 'auto' }} />
                        </Box>
                        <Typography variant='h2' fontSize={40} color={'#5161b5'} marginTop={3} marginBottom={4}>문의하기</Typography>
                        <Typography variant='p' fontSize={20} color={'#333'}>
                            저희는 영업전화와 영업사원이 없습니다. <br />
                            콜드콜, 콜드메일도 보내지 않습니다. <br />
                            <br />
                            오로지 해당 시트를 통해 보내주신 분들에 한해서만 연락을 드립니다. <br />
                            그러니 <span style={{ fontWeight: 'bold' }}>꼭 해당 시트를 작성해주시기 바랍니다.</span> <br />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box textAlign={'left'} boxShadow={2} width={'100%'} height={'100%'} paddingX={5} paddingY={5}>
                            <Box textAlign={'center'} marginTop={3} >
                                <Typography variant='h1' fontSize={35} color={'#5161b5'} marginTop={3} marginBottom={4} alignContent={'center'}>제안서</Typography>
                            </Box>

                            <form>
                                <TextField label="성함" fullWidth margin="normal" required />
                                <TextField label="연락처" fullWidth margin="normal" required />
                                <TextField label="Email" fullWidth margin="normal" required />
                                <TextField label="문의제목" fullWidth margin="normal" required />
                                <TextField label="문의내용" fullWidth margin="normal" multiline rows={4} required />
                                <Box textAlign={'right'}>
                                    <Button variant="contained" color="primary" type="submit" sx={{ width: '100%', fontFamily: 'KboGothic_M', backgroundColor: '#3e53bd' }}>문의하기</Button>
                                </Box>

                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </BasicLayout>
    );
}