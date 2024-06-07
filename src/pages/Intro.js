import React from "react";
import BasicLayout from "../components/BasicLayout";
import { Box, Grid, Typography } from "@mui/material";
import AirplayIcon from '@mui/icons-material/Airplay';
import CompanyIntro from '../assets/img/company_intro.png';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Contacts from "../components/Contacts";

export default function IntroPage() {

    return (
        <BasicLayout title={"ABOUT US"} subTitle={"회사소개"} >
            <Box paddingX={{ xs: 3, md: 50 }} paddingY={10} bgcolor={'#f3f3f3'}>
                <Typography sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 40, md: 40 }, marginBottom: '10px' }} variant="h1" textAlign={'center'}>
                    인사말
                </Typography>
                <hr style={{ border: 'none', borderTop: '1px solid #000', marginBottom: '20px', width: '50%' }} />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <img src={CompanyIntro} alt="intro_img" style={{ width: '100%', maxWidth: '700px' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h1" fontSize={30} display={'inline-block'} textAlign={'center'} width={'100%'}>
                            <FormatQuoteIcon sx={{ transform: 'scaleX(-1)' }} />저희는 이러이러한 회사입니다.<br />이렇게 생각합니다.<FormatQuoteIcon />
                        </Typography>
                        <br /><br /><br /><br /><br />
                        <Typography variant="p" display={'block'} color={'#737373'} width={'100%'}>
                            인사할 내용
                            인사할 내용인사할 내용인사할 내용인사할 내용인사할 내용
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box paddingX={{ xs: 3, md: 30 }} paddingY={10}>
                <Typography sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 40, md: 40 }, marginBottom: '10px' }} variant="h1">
                    AD PLUS는 <br />
                    <span style={{ fontFamily: 'KboGothic_B !important', color: '#5161b5', fontSize: { xs: 20, md: 40 } }} variant="h1">블로그 마케팅</span> 전문가 집단입니다.
                </Typography>
                <Typography sx={{ fontFamily: 'KboGothic_M', fontSize: 20, color: '#737373' }} variant="p">
                    회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개
                </Typography>
                <Grid container spacing={2} marginTop={10} alignContent={'center'} textAlign={'center'}>
                    <Grid item xs={12} md={4} lg={4} textAlign={'center'}>
                        <Box padding={4} sx={{ backgroundColor: '#efefef', borderRadius: 5, height: 100 }}>
                            <Typography sx={{ justifyContent: 'center' }}>정규직원: <span style={{ fontFamily: 'KboGothic_B', fontSize: 25 }}>5명</span></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} textAlign={'center'}>
                        <Box padding={4} sx={{ backgroundColor: '#efefef', borderRadius: 5, height: 100 }}>
                            <Typography sx={{ justifyContent: 'center' }}>정규직원: <span style={{ fontFamily: 'KboGothic_B', fontSize: 25 }}>5명</span></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} textAlign={'center'}>
                        <Box padding={4} sx={{ backgroundColor: '#efefef', borderRadius: 5, height: 100 }}>
                            <Typography sx={{ justifyContent: 'center' }}>정규직원: <span style={{ fontFamily: 'KboGothic_B', fontSize: 25 }}>5명</span></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} textAlign={'center'}>
                        <Box padding={4} sx={{ backgroundColor: '#efefef', borderRadius: 5, height: 100 }}>
                            <Typography sx={{ justifyContent: 'center' }}>정규직원: <span style={{ fontFamily: 'KboGothic_B', fontSize: 25 }}>5명</span></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} textAlign={'center'}>
                        <Box padding={4} sx={{ backgroundColor: '#efefef', borderRadius: 5, height: 100 }}>
                            <Typography sx={{ justifyContent: 'center' }}>정규직원: <span style={{ fontFamily: 'KboGothic_B', fontSize: 25 }}>5명</span></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} textAlign={'center'}>
                        <Box padding={4} sx={{ backgroundColor: '#efefef', borderRadius: 5, height: 100 }}>
                            <Typography sx={{ justifyContent: 'center' }}>정규직원: <span style={{ fontFamily: 'KboGothic_B', fontSize: 25 }}>5명</span></Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box width={'100%'} bgcolor={'#bac7efde'} marginTop={10}>
                <Box paddingX={{ xs: 3, md: 30 }} paddingY={10}>
                    <Typography sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 40, md: 40 } }} variant="h1">
                        AD PLUS의 <br />
                        <span style={{ fontFamily: 'KboGothic_B !important', color: '#5161b5', fontSize: { xs: 20, md: 40 } }} variant="h1">3가지</span> 운영철칙
                    </Typography>
                    <Box marginTop={10}>
                        <Box padding={4} sx={{ backgroundColor: '#efefef', borderRadius: 5, height: 150 }}>
                            <Typography sx={{ fontFamily: 'KboGothic_M', fontSize: 18, fontWeight: 'bold', display: 'flex' }} variant="p"><AirplayIcon sx={{ display: 'flex' }} /> 100% 전액 환불제</Typography><br />
                            <Typography sx={{ fontFamily: 'KboGothic_M', fontSize: 15, color: '#737373'}} variant="p">만족도가 낮은 경우, 전액 환불해드립니다.</Typography>
                        </Box>
                    </Box>
                    <Box marginTop={1}>
                        <Box padding={4} sx={{ backgroundColor: '#efefef', borderRadius: 5, height: 150 }}>
                            <Typography sx={{ fontFamily: 'KboGothic_M', fontSize: 18, fontWeight: 'bold', display: 'flex' }} variant="p"><AirplayIcon sx={{ display: 'flex' }} /> 100% 전액 환불제</Typography><br />
                            <Typography sx={{ fontFamily: 'KboGothic_M', fontSize: 15, color: '#737373'}} variant="p">만족도가 낮은 경우, 전액 환불해드립니다.</Typography>
                        </Box>
                    </Box>
                    <Box marginTop={1}>
                        <Box padding={4} sx={{ backgroundColor: '#efefef', borderRadius: 5, height: 150 }}>
                            <Typography sx={{ fontFamily: 'KboGothic_M', fontSize: 18, fontWeight: 'bold', display: 'flex' }} variant="p"><AirplayIcon sx={{ display: 'flex' }} /> 100% 전액 환불제</Typography><br />
                            <Typography sx={{ fontFamily: 'KboGothic_M', fontSize: 15, color: '#737373'}} variant="p">만족도가 낮은 경우, 전액 환불해드립니다.</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Contacts />
        </BasicLayout>
    );
}