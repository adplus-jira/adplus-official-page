import React, { useRef, useEffect } from 'react';
import BasicLayout from '../components/BasicLayout';
import { Box, Card, Typography } from '@mui/material';
import { CardContent, CardMedia, Grid } from '@mui/material';
import TestImg from '../assets/img/main_1.png';
import Carousel from 'react-material-ui-carousel';
import Header from '../components/Header';
import Contacts from '../components/Contacts';

function WorksLayout({ onClickFunc }) {

    return (
        <Grid item xs={12} sm={6} md={3} padding={1} sx={{ cursor: 'pointer' }}>
            <Card onClick={onClickFunc}>
                <CardMedia
                    component="img"
                    height="200"
                    image={TestImg}
                    alt="Image 1"
                />
                <CardContent>
                    <Typography gutterBottom variant="p" fontSize={20} fontWeight={'bold'}>
                        브랜드 블로그
                    </Typography><br />
                    <Typography variant="p" color="text.secondary" textAlign={'center'}>
                        네이버 브랜드 블로그 마케팅 서비스
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

    );
}

export default function Works() {
    const focusFirst = useRef(null);
    const focusSecond = useRef(null);
    const focusThird = useRef(null);
    const focusFourth = useRef(null);

    const firstNode = useRef(null);

    const [isInViewport, setIsInViewport] = React.useState(false);
    const [isInViewport2, setIsInViewport2] = React.useState(false);
    const [isInViewport3, setIsInViewport3] = React.useState(false);
    const [isInViewport4, setIsInViewport4] = React.useState(false);
    const [isInViewport5, setIsInViewport5] = React.useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        const callback = (entries) => {
            entries.forEach(entry => {
                switch (entry.target.id) {
                    case 'firstNode':
                        entry.isIntersecting && setIsInViewport(true);
                        break;
                    case 'secondNode':
                        entry.isIntersecting && setIsInViewport2(true);
                        break;
                    case 'thirdNode':
                        entry.isIntersecting && setIsInViewport3(true);
                        break;
                    case 'fourthNode':
                        entry.isIntersecting && setIsInViewport4(true);
                        break;
                    case 'fifthNode':
                        entry.isIntersecting && setIsInViewport5(true);
                        break;
                    default:
                        break;
                }
            });
        };


        const options = { root: null, rootMargin: '0px', threshold: 0.3 };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(firstNode.current);
        observer.observe(focusFirst.current);
        observer.observe(focusSecond.current);
        observer.observe(focusThird.current);
        observer.observe(focusFourth.current);

        return () => {
            observer.disconnect();
        }


    }, []);

    const onMoveToFocus = (ref) => {
        ref.current.style.scrollMargin = '220px';

        if (ref && ref.current) ref.current.scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <div>
        <Header />
        <BasicLayout title={"What We Do?"} subTitle={"하는 일"}>
            <Box paddingX={{ xs: 3, md: 30 }} paddingY={10} maxWidth={2000} margin={'auto'} >
                <Typography variant='h1' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 30, md: 40 }, marginBottom: '10px' }}>
                    아래와 같은<br />
                    <span style={{ fontFamily: 'KboGothic_B !important', color: '#5161b5', fontSize: { xs: 30, md: 40 } }} variant="h1">온라인 마케팅 서비스</span>를<br />
                    제공하고 있습니다.
                </Typography>
                <Typography variant='p' textAlign='center' sx={{ fontFamily: 'KboGothic_M', fontSize: { xs: 20, md: 20 }, marginBottom: '10px' }} color={'#a1a1a1'}>
                    업체의 내 외부적인 상황에 따라 이에 다른 품목을 확인할 수 있습니다.
                </Typography>
            </Box>
            <Grid container spacing={0} paddingX={{ xs: 3, md: 30 }} paddingY={5} maxWidth={2000} margin={'auto'} marginBottom={5} ref={firstNode} id="firstNode" sx={{
                opacity: isInViewport ? 1 : 0, transition: `all 1s`, transform: `translateY(${isInViewport ? '0' : '100px'})`
            }}>
                <WorksLayout onClickFunc={() => onMoveToFocus(focusFirst)} />
                <WorksLayout onClickFunc={() => onMoveToFocus(focusSecond)} />
                <WorksLayout onClickFunc={() => onMoveToFocus(focusThird)} />
                <WorksLayout onClickFunc={() => onMoveToFocus(focusFourth)} />
            </Grid>

            {/* 블로그 마케팅 */}
            <Box bgcolor={'#5161b5'}  >
                <Box paddingX={{ xs: 3, md: 30 }} paddingY={10} maxWidth={2000} margin={'auto'} width={'100%'}>
                    <Typography variant='h1' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 25, md: 35 }, marginBottom: '10px' }} color={'#fff'} textAlign={'center'}>
                        블로그 마케팅
                    </Typography>
                    <hr style={{ border: 'none', borderTop: '4px solid #2a3677', marginBottom: '20px', width: 100 }} />
                    <Box paddingX={5} paddingY={3} bgcolor={'#626fb5'} borderRadius={4}>
                        <Typography variant='p' sx={{ fontFamily: 'KboGothic_M', fontSize: { xs: 15, md: 15 }, color: '#fff' }}>
                            구글 검색광고 | 카카오 검색광고 | 네이버 브랜드 검색광고 | 네이버 쇼핑광고 | 네이버 쇼핑브랜드형 광고
                        </Typography>
                    </Box>
                    <Grid id="secondNode" ref={focusFirst} container spacing={2} paddingX={{ xs: 3, md: 3 }} paddingY={5} sx={{
                        opacity: isInViewport2 ? 1 : 0, transition: `all 1s`, transform: `translateY(${isInViewport2 ? '0' : '100px'})`
                    }}>
                        <Grid item xs={12} sm={6} md={6} sx={{ cursor: 'pointer' }}>
                            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
                                <img src={TestImg} alt="test" style={{ width: '100%', height: '500px' }} />
                                <img src={TestImg} alt="test" style={{ width: '100%', height: '500px' }} />
                            </Carousel>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Box width={'100%'} bgcolor={'#fff'} padding={5} height={500} borderRadius={6}>
                                <Typography variant='h1' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 15, md: 22 }, marginBottom: '10px' }} color={'#5161b5'}>
                                    블로그 마케팅
                                </Typography>
                                <Typography variant='p' sx={{ fontFamily: 'KboGothic_M', fontSize: { xs: 15, md: 18 }, color: '#333' }} >
                                    블로그 마케팅은 블로그를 활용한 마케팅 활동을 의미합니다. 블로그는 기업의 브랜드 가치를 높이고, 고객과 소통할 수 있는 플랫폼입니다.
                                </Typography>
                                <hr style={{ border: 'none', borderTop: '2px solid #5a66a7', marginBottom: '20px', width: '100%' }} />
                                <Typography variant='h1' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 15, md: 22 }, marginBottom: '10px' }} color={'#5161b5'}>
                                    블로그 마케팅
                                </Typography>
                                <Typography variant='p' sx={{ fontFamily: 'KboGothic_M', fontSize: { xs: 15, md: 18 }, color: '#333' }} >
                                    블로그 마케팅은 블로그를 활용한 마케팅 활동을 의미합니다. 블로그는 기업의 브랜드 가치를 높이고, 고객과 소통할 수 있는 플랫폼입니다.
                                </Typography>
                                <hr style={{ border: 'none', borderTop: '2px solid #5a66a7', marginBottom: '20px', width: '100%' }} />
                                <Typography variant='h1' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 15, md: 22 }, marginBottom: '10px' }} color={'#5161b5'}>
                                    블로그 마케팅
                                </Typography>
                                <Typography variant='p' sx={{ fontFamily: 'KboGothic_M', fontSize: { xs: 15, md: 18 }, color: '#333' }} >
                                    블로그 마케팅은 블로그를 활용한 마케팅 활동을 의미합니다. 블로그는 기업의 브랜드 가치를 높이고, 고객과 소통할 수 있는 플랫폼입니다.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Box>

            {/* 카페 */}
            <Box >
                <Box paddingX={{ xs: 3, md: 30 }} paddingY={10} maxWidth={2000} margin={'auto'} width={'100%'}>
                    <Typography variant='h1' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 25, md: 35 }, marginBottom: '10px' }} color={'#333'} textAlign={'center'}>
                        블로그 마케팅
                    </Typography>
                    <hr style={{ border: 'none', borderTop: '4px solid #2a3677', marginBottom: '20px', width: 100 }} />
                    <Box paddingX={5} paddingY={3} bgcolor={'#626fb5'} borderRadius={4}>
                        <Typography variant='p' sx={{ fontFamily: 'KboGothic_M', fontSize: { xs: 15, md: 15 }, color: '#fff' }}>
                            구글 검색광고 | 카카오 검색광고 | 네이버 브랜드 검색광고 | 네이버 쇼핑광고 | 네이버 쇼핑브랜드형 광고
                        </Typography>
                    </Box>
                    <Grid container spacing={2} paddingX={{ xs: 3, md: 3 }} paddingY={5} ref={focusSecond} id="thirdNode" sx={{
                        opacity: isInViewport3 ? 1 : 0, transition: `all 1s`, transform: `translateY(${isInViewport3 ? '0' : '100px'})`
                    }}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Box width={'100%'} bgcolor={'#fff'} padding={5} height={500} borderRadius={6}>
                                <Typography variant='h1' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 15, md: 22 }, marginBottom: '10px' }} color={'#5161b5'}>
                                    블로그 마케팅
                                </Typography>
                                <Typography variant='p' sx={{ fontFamily: 'KboGothic_M', fontSize: { xs: 15, md: 18 }, color: '#333' }} >
                                    블로그 마케팅은 블로그를 활용한 마케팅 활동을 의미합니다. 블로그는 기업의 브랜드 가치를 높이고, 고객과 소통할 수 있는 플랫폼입니다.
                                </Typography>
                                <hr style={{ border: 'none', borderTop: '2px solid #5a66a7', marginBottom: '20px', width: '100%' }} />
                                <Typography variant='h1' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 15, md: 22 }, marginBottom: '10px' }} color={'#5161b5'}>
                                    블로그 마케팅
                                </Typography>
                                <Typography variant='p' sx={{ fontFamily: 'KboGothic_M', fontSize: { xs: 15, md: 18 }, color: '#333' }} >
                                    블로그 마케팅은 블로그를 활용한 마케팅 활동을 의미합니다. 블로그는 기업의 브랜드 가치를 높이고, 고객과 소통할 수 있는 플랫폼입니다.
                                </Typography>
                                <hr style={{ border: 'none', borderTop: '2px solid #5a66a7', marginBottom: '20px', width: '100%' }} />
                                <Typography variant='h1' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 15, md: 22 }, marginBottom: '10px' }} color={'#5161b5'}>
                                    블로그 마케팅
                                </Typography>
                                <Typography variant='p' sx={{ fontFamily: 'KboGothic_M', fontSize: { xs: 15, md: 18 }, color: '#333' }} >
                                    블로그 마케팅은 블로그를 활용한 마케팅 활동을 의미합니다. 블로그는 기업의 브랜드 가치를 높이고, 고객과 소통할 수 있는 플랫폼입니다.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} sx={{ cursor: 'pointer' }}>
                            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
                                <img src={TestImg} alt="test" style={{ width: '100%', height: '500px' }} />
                                <img src={TestImg} alt="test" style={{ width: '100%', height: '500px' }} />
                            </Carousel>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* 블로그 마케팅 */}
            <Box bgcolor={'#5161b5'} >
                <Box paddingX={{ xs: 3, md: 30 }} paddingY={10} maxWidth={2000} margin={'auto'} width={'100%'}>
                    <Typography variant='h1' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 25, md: 35 }, marginBottom: '10px' }} color={'#fff'} textAlign={'center'}>
                        블로그 마케팅
                    </Typography>
                    <hr style={{ border: 'none', borderTop: '4px solid #2a3677', marginBottom: '20px', width: 100 }} />
                    <Box paddingX={5} paddingY={3} bgcolor={'#626fb5'} borderRadius={4}>
                        <Typography variant='p' sx={{ fontFamily: 'KboGothic_M', fontSize: { xs: 15, md: 15 }, color: '#fff' }}>
                            구글 검색광고 | 카카오 검색광고 | 네이버 브랜드 검색광고 | 네이버 쇼핑광고 | 네이버 쇼핑브랜드형 광고
                        </Typography>
                    </Box>
                    <Grid container spacing={2} paddingX={{ xs: 3, md: 3 }} paddingY={5} ref={focusThird} id="fourthNode" sx={{
                        opacity: isInViewport4 ? 1 : 0, transition: `all 1s`, transform: `translateY(${isInViewport4 ? '0' : '100px'})`
                    }}>
                        <Grid item xs={12} sm={6} md={6} sx={{ cursor: 'pointer' }}>
                            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
                                <img src={TestImg} alt="test" style={{ width: '100%', height: '500px' }} />
                                <img src={TestImg} alt="test" style={{ width: '100%', height: '500px' }} />
                            </Carousel>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Box width={'100%'} bgcolor={'#fff'} padding={5} height={500} borderRadius={6}>
                                <Typography variant='h1' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 15, md: 22 }, marginBottom: '10px' }} color={'#5161b5'}>
                                    블로그 마케팅
                                </Typography>
                                <Typography variant='p' sx={{ fontFamily: 'KboGothic_M', fontSize: { xs: 15, md: 18 }, color: '#333' }} >
                                    블로그 마케팅은 블로그를 활용한 마케팅 활동을 의미합니다. 블로그는 기업의 브랜드 가치를 높이고, 고객과 소통할 수 있는 플랫폼입니다.
                                </Typography>
                                <hr style={{ border: 'none', borderTop: '2px solid #5a66a7', marginBottom: '20px', width: '100%' }} />
                                <Typography variant='h1' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 15, md: 22 }, marginBottom: '10px' }} color={'#5161b5'}>
                                    블로그 마케팅
                                </Typography>
                                <Typography variant='p' sx={{ fontFamily: 'KboGothic_M', fontSize: { xs: 15, md: 18 }, color: '#333' }} >
                                    블로그 마케팅은 블로그를 활용한 마케팅 활동을 의미합니다. 블로그는 기업의 브랜드 가치를 높이고, 고객과 소통할 수 있는 플랫폼입니다.
                                </Typography>
                                <hr style={{ border: 'none', borderTop: '2px solid #5a66a7', marginBottom: '20px', width: '100%' }} />
                                <Typography variant='h1' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 15, md: 22 }, marginBottom: '10px' }} color={'#5161b5'}>
                                    블로그 마케팅
                                </Typography>
                                <Typography variant='p' sx={{ fontFamily: 'KboGothic_M', fontSize: { xs: 15, md: 18 }, color: '#333' }} >
                                    블로그 마케팅은 블로그를 활용한 마케팅 활동을 의미합니다. 블로그는 기업의 브랜드 가치를 높이고, 고객과 소통할 수 있는 플랫폼입니다.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* 카페 */}
            <Box >
                <Box paddingX={{ xs: 3, md: 30 }} paddingY={10} maxWidth={2000} margin={'auto'} width={'100%'}>
                    <Typography variant='h1' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 25, md: 35 }, marginBottom: '10px' }} color={'#333'} textAlign={'center'}>
                        블로그 마케팅
                    </Typography>
                    <hr style={{ border: 'none', borderTop: '4px solid #2a3677', marginBottom: '20px', width: 100 }} />
                    <Box paddingX={5} paddingY={3} bgcolor={'#626fb5'} borderRadius={4}>
                        <Typography variant='p' sx={{ fontFamily: 'KboGothic_M', fontSize: { xs: 15, md: 15 }, color: '#fff' }}>
                            구글 검색광고 | 카카오 검색광고 | 네이버 브랜드 검색광고 | 네이버 쇼핑광고 | 네이버 쇼핑브랜드형 광고
                        </Typography>
                    </Box>
                    <Grid container spacing={2} paddingX={{ xs: 3, md: 3 }} paddingY={5} ref={focusFourth} id="fifthNode" sx={{
                        opacity: isInViewport5 ? 1 : 0, transition: `all 1s`, transform: `translateY(${isInViewport5 ? '0' : '100px'})`
                    }}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Box width={'100%'} bgcolor={'#fff'} padding={5} height={500} borderRadius={6}>
                                <Typography variant='h1' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 15, md: 22 }, marginBottom: '10px' }} color={'#5161b5'}>
                                    블로그 마케팅
                                </Typography>
                                <Typography variant='p' sx={{ fontFamily: 'KboGothic_M', fontSize: { xs: 15, md: 18 }, color: '#333' }} >
                                    블로그 마케팅은 블로그를 활용한 마케팅 활동을 의미합니다. 블로그는 기업의 브랜드 가치를 높이고, 고객과 소통할 수 있는 플랫폼입니다.
                                </Typography>
                                <hr style={{ border: 'none', borderTop: '2px solid #5a66a7', marginBottom: '20px', width: '100%' }} />
                                <Typography variant='h1' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 15, md: 22 }, marginBottom: '10px' }} color={'#5161b5'}>
                                    블로그 마케팅
                                </Typography>
                                <Typography variant='p' sx={{ fontFamily: 'KboGothic_M', fontSize: { xs: 15, md: 18 }, color: '#333' }} >
                                    블로그 마케팅은 블로그를 활용한 마케팅 활동을 의미합니다. 블로그는 기업의 브랜드 가치를 높이고, 고객과 소통할 수 있는 플랫폼입니다.
                                </Typography>
                                <hr style={{ border: 'none', borderTop: '2px solid #5a66a7', marginBottom: '20px', width: '100%' }} />
                                <Typography variant='h1' sx={{ fontFamily: 'KboGothic_B', fontSize: { xs: 15, md: 22 }, marginBottom: '10px' }} color={'#5161b5'}>
                                    블로그 마케팅
                                </Typography>
                                <Typography variant='p' sx={{ fontFamily: 'KboGothic_M', fontSize: { xs: 15, md: 18 }, color: '#333' }} >
                                    블로그 마케팅은 블로그를 활용한 마케팅 활동을 의미합니다. 블로그는 기업의 브랜드 가치를 높이고, 고객과 소통할 수 있는 플랫폼입니다.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} sx={{ cursor: 'pointer' }}>
                            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
                                <img src={TestImg} alt="test" style={{ width: '100%', height: '500px' }} />
                                <img src={TestImg} alt="test" style={{ width: '100%', height: '500px' }} />
                            </Carousel>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Contacts />
        </BasicLayout>
        </div>
    );
}