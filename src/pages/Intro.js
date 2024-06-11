import React, { useEffect } from "react";
import BasicLayout from "../components/BasicLayout";
import { Box, Grid, Typography } from "@mui/material";
import AirplayIcon from '@mui/icons-material/Airplay';
import CompanyIntro from '../assets/img/company_intro.png';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Contacts from "../components/Contacts";
import Header from "../components/Header";

export default function IntroPage() {

    const introText = React.useRef(null);
    const secondSection = React.useRef(null);
    const thirdSection = React.useRef(null);

    const [isInViewport, setIsInViewport] = React.useState(false);
    const [isInViewport2, setIsInViewport2] = React.useState(false);
    const [isInViewport3, setIsInViewport3] = React.useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        const callback = (entries) => {
            entries.forEach(entry => {
                switch (entry.target.id) {
                    case 'introText':
                        entry.isIntersecting && setIsInViewport(entry.isIntersecting);
                        break;
                    case 'secondSection':
                        entry.isIntersecting && setIsInViewport2(entry.isIntersecting);
                        break;
                    case 'thirdSection':
                        entry.isIntersecting && setIsInViewport3(entry.isIntersecting);
                        break;
                    default:
                        break;
                }
            });
        };
        
        const options = { root: null, rootMargin: '0px', threshold: 0.3 };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(introText.current);
        observer.observe(secondSection.current);
        observer.observe(thirdSection.current);

        return () => {
            window.scrollTo(0, 0);
            observer.disconnect();
        }
    }, []);



    return (
        <div>

        <Header />
        <BasicLayout title={"ABOUT US"} subTitle={"회사소개"} >
            <Box bgcolor={'#f3f3f3'} >
                <Box paddingX={{ xs: 3, md: 40 }} paddingY={10} maxWidth={2000} margin={'auto'} width={'100%'}>
                    <Typography sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 40, md: 40 }, marginBottom: '10px' }} variant="h1" textAlign={'center'}>
                        인사말
                    </Typography>
                    <hr style={{ border: 'none', borderTop: '1px solid #000', marginBottom: '20px', width: '50%' }} />
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} sx={{ opacity: isInViewport ? 1 : 0, transition: `all 1s`, transform: `translateY(${isInViewport ? '0' : '50px'})` }}>
                            <img src={CompanyIntro} alt="intro_img" style={{ width: '100%', maxWidth: '700px' }} />
                        </Grid>
                        <Grid item xs={12} md={6} id="introText" ref={introText}>
                            <Typography variant="h1" fontSize={30} display={'inline-block'} textAlign={'center'} width={'100%'} sx={{ opacity: isInViewport ? 1 : 0, transition: `all 1s`, transform: `translateY(${isInViewport ? '0' : '50px'})` }}>
                                <FormatQuoteIcon sx={{ transform: 'scaleX(-1)' }} />저희는 이러이러한 회사입니다.<br />이렇게 생각합니다.<FormatQuoteIcon />
                            </Typography>
                            <br /><br /><br /><br /><br />
                            <Typography variant="p" display={'block'} color={'#737373'} width={'100%'} sx={{ opacity: isInViewport ? 1 : 0, transition: `all 1s`, transitionDelay: '0.5s', transform: `translateY(${isInViewport ? '0' : '50px'})` }}>
                                인사할 내용
                                인사할 내용인사할 내용인사할 내용인사할 내용인사할 내용
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box paddingX={{ xs: 3, md: 30 }} paddingY={10} maxWidth={2000} margin={'auto'} width={'100%'} >
                <Typography sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 27, md: 40 }, marginBottom: '10px' }} variant="h1">
                    AD PLUS는 <br />
                    <span style={{ fontFamily: 'KboGothic_B !important', color: '#5161b5', fontSize: { xs: 20, md: 40 } }} variant="h1">블로그 마케팅</span> 전문가 집단입니다.
                </Typography>
                <Typography sx={{ fontFamily: 'KboGothic_M', fontSize: { xs: 18, md: 20 }, color: '#737373' }} variant="p">
                    회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개회사소개
                </Typography>
                <Grid container spacing={2} marginTop={10} alignContent={'center'} textAlign={'center'} id="secondSection" ref={secondSection}>
                    <Grid item xs={12} md={4} lg={4} textAlign={'center'} sx={{ opacity: isInViewport2 ? 1 : 0, transition: `all 1s`, transform: `translateY(${isInViewport2 ? '0' : '50px'})` }}>
                        <Box padding={4} sx={{ backgroundColor: '#efefef', borderRadius: 5, height: 100 }}>
                            <Typography sx={{ justifyContent: 'center' }}>정규직원: <span style={{ fontFamily: 'KboGothic_B', fontSize: 25 }}>5명</span></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} textAlign={'center'} sx={{ opacity: isInViewport2 ? 1 : 0, transition: `all 1s`, transform: `translateY(${isInViewport2 ? '0' : '50px'})` }}>
                        <Box padding={4} sx={{ backgroundColor: '#efefef', borderRadius: 5, height: 100 }}>
                            <Typography sx={{ justifyContent: 'center' }}>정규직원: <span style={{ fontFamily: 'KboGothic_B', fontSize: 25 }}>5명</span></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} textAlign={'center'} sx={{ opacity: isInViewport2 ? 1 : 0, transition: `all 1s`, transform: `translateY(${isInViewport2 ? '0' : '50px'})` }}>
                        <Box padding={4} sx={{ backgroundColor: '#efefef', borderRadius: 5, height: 100 }}>
                            <Typography sx={{ justifyContent: 'center' }}>정규직원: <span style={{ fontFamily: 'KboGothic_B', fontSize: 25 }}>5명</span></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} textAlign={'center'} sx={{ opacity: isInViewport2 ? 1 : 0, transition: `all 1s`, transform: `translateY(${isInViewport2 ? '0' : '50px'})` }}>
                        <Box padding={4} sx={{ backgroundColor: '#efefef', borderRadius: 5, height: 100 }}>
                            <Typography sx={{ justifyContent: 'center' }}>정규직원: <span style={{ fontFamily: 'KboGothic_B', fontSize: 25 }}>5명</span></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} textAlign={'center'} sx={{ opacity: isInViewport2 ? 1 : 0, transition: `all 1s`, transform: `translateY(${isInViewport2 ? '0' : '50px'})` }}>
                        <Box padding={4} sx={{ backgroundColor: '#efefef', borderRadius: 5, height: 100 }}>
                            <Typography sx={{ justifyContent: 'center' }}>정규직원: <span style={{ fontFamily: 'KboGothic_B', fontSize: 25 }}>5명</span></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} textAlign={'center'} sx={{ opacity: isInViewport2 ? 1 : 0, transition: `all 1s`, transform: `translateY(${isInViewport2 ? '0' : '50px'})` }}>
                        <Box padding={4} sx={{ backgroundColor: '#efefef', borderRadius: 5, height: 100 }}>
                            <Typography sx={{ justifyContent: 'center' }}>정규직원: <span style={{ fontFamily: 'KboGothic_B', fontSize: 25 }}>5명</span></Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box width={'100%'} bgcolor={'#0f1939de'} marginTop={10}>
                <Box paddingX={{ xs: 3, md: 30 }} paddingY={10} maxWidth={2000} margin={'auto'} width={'100%'} id="thirdSection" ref={thirdSection}>
                    <Typography sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 40, md: 40 } }} variant="h1" color={'#e2e2e2'}>
                        AD PLUS의 <br />
                        <span style={{ fontFamily: 'KboGothic_B !important', color: '#5161b5', fontSize: { xs: 20, md: 40 } }} variant="h1">3가지</span> 운영철칙
                    </Typography>
                    <Box marginTop={10} sx={{ opacity: isInViewport3 ? 1 : 0, transition: `all 1s`, transform: `translateY(${isInViewport3 ? '0' : '50px'})` }}>
                        <Box padding={4} sx={{ backgroundColor: '#efefef', borderRadius: 5, height: 150 }}>
                            <Typography sx={{ fontFamily: 'KboGothic_M', fontSize: 18, fontWeight: 'bold', display: 'flex' }} variant="p"><AirplayIcon sx={{ display: 'flex' }} /> 100% 전액 환불제</Typography><br />
                            <Typography sx={{ fontFamily: 'KboGothic_M', fontSize: 15, color: '#737373' }} variant="p">만족도가 낮은 경우, 전액 환불해드립니다.</Typography>
                        </Box>
                    </Box>
                    <Box marginTop={1} sx={{ opacity: isInViewport3 ? 1 : 0, transition: `all 1s`, transitionDelay: '0.5s', transform: `translateY(${isInViewport3 ? '0' : '50px'})` }}>
                        <Box padding={4} sx={{ backgroundColor: '#efefef', borderRadius: 5, height: 150 }}>
                            <Typography sx={{ fontFamily: 'KboGothic_M', fontSize: 18, fontWeight: 'bold', display: 'flex' }} variant="p"><AirplayIcon sx={{ display: 'flex' }} /> 100% 전액 환불제</Typography><br />
                            <Typography sx={{ fontFamily: 'KboGothic_M', fontSize: 15, color: '#737373' }} variant="p">만족도가 낮은 경우, 전액 환불해드립니다.</Typography>
                        </Box>
                    </Box>
                    <Box marginTop={1} sx={{ opacity: isInViewport3 ? 1 : 0, transition: `all 1s`, transitionDelay: '1s', transform: `translateY(${isInViewport3 ? '0' : '50px'})` }}>
                        <Box padding={4} sx={{ backgroundColor: '#efefef', borderRadius: 5, height: 150 }}>
                            <Typography sx={{ fontFamily: 'KboGothic_M', fontSize: 18, fontWeight: 'bold', display: 'flex' }} variant="p"><AirplayIcon sx={{ display: 'flex' }} /> 100% 전액 환불제</Typography><br />
                            <Typography sx={{ fontFamily: 'KboGothic_M', fontSize: 15, color: '#737373' }} variant="p">만족도가 낮은 경우, 전액 환불해드립니다.</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Contacts />
        </BasicLayout>
        </div>
    );
}