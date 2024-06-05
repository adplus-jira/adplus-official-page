import React from 'react';
import '../assets/css/common.css';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Banner from '../assets/img/main_banner.jpg';
import FirstSectionImg from '../assets/img/main_1.png';
import Contacts from '../components/Contacts';
import SecondSectionImg from '../assets/img/main_2.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CircleLayout = ({ value, index }) => {
    return (
        <div>
            <Box
                key={index}
                width={{ xs: 150, md: 170, lg: 190 }}
                height={{ xs: 150, md: 170, lg: 190 }}
                textAlign={'center'}
                textOverflow={'break-word'}
                sx={{
                    border: '4px solid #838fd3',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'KboGothic_M',
                    fontSize: 17,
                    color: '#3e53bd',
                    margin: 'auto',
                    marginBottom: '10px',
                    position: 'relative',
                    '&:hover': {
                        backgroundColor: '#3e53bd',
                        color: 'white'
                    }
                }}
            >
                <p style={{ fontSize: 22, fontWeight: 'bold' }}>{value}</p>
            </Box>

        </div>
    );
}

function worksLayout({ work, index }) {
    return (
        <Grid item xs={12} md={3} lg={3} key={index} >
            <Box width={'100%'} height={{ xs: 400, md: 500 }} sx={{
                backgroundImage: `url('${work.url}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <Box width={'100%'} height={'100%'} sx={{
                    transition: 'all .3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.3)'
                    }
                }}>
                </Box>
            </Box>
        </Grid>
    );

}

function CardLayout({ card, index }) {
    return (
        <Grid item xs={6} md={3} lg={3} key={index} >
            <Card sx={{ maxWidth: 345 }} key={index}>
                <CardMedia
                    sx={{ height: 150 }}
                    image={card.url}
                    title="aaaaa"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

    );
}

function MainPage() {
    const adArray = ["전화 또는 방문상담", "광고 매체 선정", "광고 서비스 제안", "일정 및 예산 확정", "광고 집행", "월별 성과보고"];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const sliderImageUrl = [{
            url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1"
        }, {
            url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
        }, {
            url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*"
        }, {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"
        }, {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU"
        }, {
            url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1"
        },
    ];

    const works = [{
        url: 'https://cdn-pro-web-228-183.cdn-nhncommerce.com/handrak_godomall_com/data/skin/front/websre_WB01/img/split/split-viral2.png',
    }, {
        url: 'https://cdn-pro-web-228-183.cdn-nhncommerce.com/handrak_godomall_com/data/skin/front/websre_WB01/img/split/split-viral2.png',
    }, {
        url: 'https://cdn-pro-web-228-183.cdn-nhncommerce.com/handrak_godomall_com/data/skin/front/websre_WB01/img/split/split-viral2.png',
    }, {
        url: 'https://cdn-pro-web-228-183.cdn-nhncommerce.com/handrak_godomall_com/data/skin/front/websre_WB01/img/split/split-viral2.png',
    }
    ];

    const cards = [{
        title: 'Title',
        url: FirstSectionImg,
        Content: 'Contentafawefawefawfewaefwaefawefawfeawef'
    }, {
        title: 'Title',
        url: FirstSectionImg,
        Content: 'Contentafawefawefawfewaefwaefawefawfeawef'
    }, {
        title: 'Title',
        url: FirstSectionImg,
        Content: 'Contentafawefawefawfewaefwaefawefawfeawef'
    }, {
        title: 'Title',
        url: FirstSectionImg,
        Content: 'Contentafawefawefawfewaefwaefawefawfeawef'
    }
    ];

    return (
        <div>
            <div style={{ width: '100%' }}>
                <Box sx={{
                    backgroundImage: `url(${Banner})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '100vh'
                }}>
                    <Box
                        bgcolor={'rgba(0, 0, 0, 0.7)'}
                        position={'absolute'}
                        top={0}
                        left={0}
                        width={'100%'}
                        height={'100%'}
                    >
                        <Typography sx={{ fontFamily: 'KboGothic_M', color: '#e5e5e5', fontSize: { md: 60, xs: 30 }, marginBottom: '20px', paddingTop: 30 }} textAlign={'center'} variant='h1' marginY={5} >
                            당신의 마케팅 성공 파트너, <br />
                            <hr style={{ border: '2px solid #e5e5e5', width: '50%', margin: 'auto', marginTop: '20px', marginBottom: 20 }} />
                            AD PLUS
                        </Typography>
                        
                    </Box>
                </Box>
                <Grid container paddingY={10} paddingX={{ xs: 3, md: 30 }}>
                    <Grid item xs={12} md={6} lg={6} paddingX={{ xs: 1, md: 5 }} >
                        <Box width={'100%'} paddingTop={10} sx={{ fontSize: 21 }}>
                            <h1><span style={{ color: 'green' }}>재계약률</span>을 보고<br />마케팅사를 고르세요</h1>
                            <Typography sx={{ fontFamily: 'KboGothic_L', fontSize: { sm: 12, md: 22 }, color: '#757575' }}>
                                실력있는 법률마케팅사를 고르는 1가지 기준이 있다면, 바로 재계약률입니다.<br />
                                얼마나 오랜기간, 얼마나 많은 작업을 했는지도 물론 중요하지만, 그것보다<br />
                                재계약률이 그 실력에 대해 가늠할 수 있는 최적의 기준입니다.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} padding={3}>
                        <Box width={{ xs: 224, md: 526 }} height={{ xs: 216, md: 510 }} sx={{
                            backgroundImage: `url(${FirstSectionImg})`,
                            backgroundSize: '100%',
                            backgroundRepeat: 'no-repeat',
                            margin: 'auto'
                        }}>

                        </Box>
                    </Grid>
                </Grid>
                {/* 광고 작업 */}
                <Grid container spacing={0} paddingTop={3}>
                    {works.map((work, index) => worksLayout({ work, index }))}
                </Grid>

                {/* 영업 순서 */}
                <Box width={'80%'} paddingX={3} sx={{ marginX: 'auto', marginTop: '0px' }} paddingTop={10} paddingBottom={20}>
                    <h1 style={{ fontSize: 35, marginBottom: '20px', marginTop: '0px', color: '#757575' }}>
                        <span style={{ color: 'rgb(81, 97, 181)' }}>AdPlus</span>의 광고는<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        이 순서대로 <span style={{ color: 'rgb(81, 97, 181)' }}>진행</span>됩니다.</h1>

                    <hr style={{ border: '2px solid rgb(81, 97, 181)', width: 300, margin: 0, marginBottom: '20px' }} />

                    <Grid container spacing={3} paddingX={2} alignContent={'center'} sx={{ marginTop: '30px' }}>
                        { adArray.map((value, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={2} key={index} margin={'auto'}>
                                    <CircleLayout value={value} index={index} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>


                <Box width={'100%'}  >
                    <Box width={'100%'} height={{ xs: 1200, md: 700 }} sx={{
                        backgroundImage: `url('${SecondSectionImg}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                        <Box
                            bgcolor={'rgba(0, 0, 0, 0.7)'}
                            width={'100%'}
                            height={{ xs: 1200, md: 700 }}
                            zIndex={2}
                        >
                            <Typography sx={{ fontFamily: 'KboGothic_M', color: '#e5e5e5', fontSize: 40, marginBottom: '20px', paddingTop: 10 }} textAlign={'center'} variant='h1' marginY={5} >
                                디자인 하는 광고 회사
                            </Typography>
                            <Typography sx={{ fontFamily: 'KboGothic_M', color: '#e5e5e5', fontSize: 18, marginBottom: '50px' }} textAlign={'center'} marginBottom={5} >
                                전단지, 명함, 브랜드 웹툰, 모션그래픽, 홈페이지까지<br />
                                광고뿐만 아니라 브랜드를 위한 다양한 콘텐츠 제작을 지원합니다.
                            </Typography>

                            <Grid container spacing={2} width={'100%'} paddingX={{ xs: 3, md: 30 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {cards.map((card, index) => CardLayout({ card, index }))}
                            </Grid>
                        </Box>
                    </Box>
                </Box>

                <Box width={'100%'} paddingTop={5} paddingBottom={{ lg: 15, xs: 5 }} paddingX={{ xs: 3, md: 30 }} sx={{ bgcolor: '#141c4d' }} >
                    <Typography sx={{ fontFamily: 'KboGothic_B !important', color: '#e5e5e5', fontSize: 40, marginBottom: '20px' }} variant='h1' marginY={5} >
                        협력업체 소개
                    </Typography>
                    <hr style={{ border: '2px solid #e5e5e5', width: 250, margin: 0, marginBottom: '20px' }} />
                    <Typography sx={{ fontFamily: 'KboGothic_M', color: '#e5e5e5', fontSize: 20, marginBottom: '20px' }} marginBottom={5} >
                        AD Plus 와 함께하는 업체들을 소개합니다.
                    </Typography>

                    <Box width={'100%'} height={350} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Carousel
                            responsive={responsive}
                            autoPlay={true}
                            swipeable={true}
                            draggable={true}
                            showDots={false}
                            infinite={true}
                            partialVisible={false}
                            dotListClass="custom-dot-list-style"
                        >
                            {sliderImageUrl.map((imageUrl, index) => {
                                return (
                                    <div className="slider" key={index}>
                                        <img src={imageUrl.url} alt="movie" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </Box>
                </Box>

                <Box width={'100%'}>
                    <Contacts />
                </Box>
            </div>
        </div>
    );
}

export default MainPage;
