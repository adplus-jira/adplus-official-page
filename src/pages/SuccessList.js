import React, { useEffect, useState } from 'react';
import BasicLayout from '../components/BasicLayout';
import { Box, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';
import LightBox, { Modal, ModalGateway } from 'react-images';
import Header from '../components/Header';
import Contacts from '../components/Contacts';
import SuccessBg from '../assets/img/success_bg.jpg';

export default function SuccessList() {
    const [isOpen, setIsOpen] = useState(false);
    const images = [
        { source: 'https://cdn.imweb.me/thumbnail/20240516/676c3a662c3cf.png' },
        { source: 'https://cdn.imweb.me/thumbnail/20240516/676c3a662c3cf.png' },
        { source: 'https://cdn.imweb.me/thumbnail/20240516/676c3a662c3cf.png' },
        { source: 'https://cdn.imweb.me/thumbnail/20240516/676c3a662c3cf.png' },
        { source: 'https://cdn.imweb.me/thumbnail/20240516/676c3a662c3cf.png' },
        { source: 'https://cdn.imweb.me/thumbnail/20240516/676c3a662c3cf.png' },
        { source: 'https://cdn.imweb.me/thumbnail/20240516/676c3a662c3cf.png' },
        { source: 'https://cdn.imweb.me/thumbnail/20240516/676c3a662c3cf.png' },
        { source: 'https://cdn.imweb.me/thumbnail/20240516/676c3a662c3cf.png' }
    ];
    const [imgIdx, setImgIdx] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />

            <BasicLayout title={'SUCCESS EXAMPLE'} subTitle={'성공 사례'} bannerImg={SuccessBg}>
                <Box paddingX={{ xs: 3, md: 20 }} paddingY={10} maxWidth={2000} margin={'auto'} width={'100%'}>
                    <Typography variant='h1' textAlign='center' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 30, md: 30 }, marginBottom: '10px' }}>
                        플레이스 성공사례
                    </Typography>
                    <hr style={{ border: 'none', borderTop: '4px solid #5161b5', marginBottom: '20px', width: 100 }} />
                    {
                        isOpen && (
                            <ModalGateway>
                                <Modal src='https://cdn.imweb.me/thumbnail/20240516/676c3a662c3cf.png' onClose={() => setIsOpen(false)}>
                                    <LightBox currentIndex={imgIdx} views={images} />
                                </Modal>
                            </ModalGateway>
                        )
                    }
                    <Box paddingY={5}>
                        <Grid container spacing={1}>
                            {
                                images.map((img, idx) => {
                                    return (
                                        <Grid item md={4}>
                                            <img src={img.source} alt='test' style={{ width: '100%', cursor: 'pointer' }} onClick={() => { setIsOpen(true); setImgIdx(idx) }} />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </Box>
                {/* <Box paddingX={{ xs: 3, md: 20 }} paddingY={10} bgcolor={'#f3f3f3'} >
                <Typography variant='h1' textAlign='center' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 30, md: 30 }, marginBottom: '10px' }}>
                    플레이스 성공사례
                </Typography>
                <hr style={{ border: 'none', borderTop: '4px solid #5161b5', marginBottom: '20px', width: 100 }} />
                <Box paddingY={5}>
                    <Grid container spacing={1}>
                        {
                            isOpen && (
                                <ModalGateway>
                                    <Modal src='https://cdn.imweb.me/thumbnail/20240516/676c3a662c3cf.png' onClose={() => setIsOpen(false)}>
                                        <LightBox currentIndex={imgIdx} views={images} />
                                    </Modal>
                                </ModalGateway>
                            )
                        }
                        <Box paddingY={5}>
                            <Grid container spacing={1}>
                                {
                                    images.map((img, idx) => {
                                        return (
                                            <Grid item md={4}>
                                                <img src={img.source} alt='test' style={{ width: '100%', cursor: 'pointer' }} onClick={() => { setIsOpen(true); setImgIdx(idx) }} />
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </Box> */}
            </BasicLayout>
            <Contacts />
        </div>
    );
}