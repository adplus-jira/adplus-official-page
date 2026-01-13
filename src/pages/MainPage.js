import React, { useEffect } from 'react';
import '../assets/css/common.css';
import { Box, Card, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material';
import Banner from '../assets/img/main_banner.jpg';
import FirstSectionImg from '../assets/img/main_1.png';
import Contacts from '../components/Contacts';
import SecondSectionImg from '../assets/img/main_2.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Transition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import { FullpageContainer, FullpageSection } from '@shinyongjun/react-fullpage';
import '@shinyongjun/react-fullpage/css';
import Header from '../components/MainPageHeader';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AdPlus_BG from '../assets/img/adPlus_bg.png';
import LapTop from '../assets/img/laptop.jpg';



const CircleLayout = ({ value, index }) => {
    return (
        <div>
            <Box
                key={index}
                width={{ xs: 180, md: 170, lg: 220 }}
                height={{ xs: 180, md: 170, lg: 220 }}
                textAlign={'center'}
                textOverflow={'break-word'}
                sx={{
                    border: '1px solid #838fd3',
                    borderRadius: '50%',
                    backgroundColor: 'rgb(78 98 171 / 70%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'KboGothic_M',
                    color: '#e3e3e3',
                    margin: 'auto',
                    marginBottom: '10px',
                    position: 'relative',
                    '&:hover': {
                        backgroundColor: '#6471b5',
                        color: '#e3e3e3'
                    }
                }}
            >
                <Typography variant='p' fontSize={{ xs: 18, md: 23 }}>{value}</Typography>
            </Box>

        </div>
    );
}

function worksLayout({ work, index, navigate }) {

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
                }} onClick={() => { navigate('/work', { state: { key: index } }) }} >
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

function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function useCountNum(end, start = 0, duration = 2000) {
    const [count, setCount] = React.useState(start)
    const frameRate = 1000 / 60
    const totalFrame = Math.round(duration / frameRate)

    useEffect(() => {
        let currentNumber = start
        const counter = setInterval(() => {
            const progress = easeOutExpo(++currentNumber / totalFrame)
            setCount(Math.round(end * progress))

            if (progress === 1) {
                clearInterval(counter)
            }
        }, frameRate)
    }, [end, frameRate, start, totalFrame])

    return count;
}

function FullpageIndicator({ activeIndex, setActiveIndex }) {
    return (
        <ol className='virtical-carousel-indicator'>
            <li className={`${activeIndex === 0 && 'active'}`} onClick={() => setActiveIndex(0)}></li>
            <li className={`${activeIndex === 1 && 'active'}`} onClick={() => setActiveIndex(1)}></li>
            <li className={`${activeIndex === 2 && 'active'}`} onClick={() => setActiveIndex(2)}></li>
            <li className={`${activeIndex === 3 && 'active'}`} onClick={() => setActiveIndex(3)}></li>
            <li className={`${activeIndex === 4 && 'active'}`} onClick={() => setActiveIndex(4)}></li>
            <li className={`${activeIndex === 5 && 'active'}`} onClick={() => setActiveIndex(5)}></li>
            <li className={`${activeIndex === 6 && 'active'}`} onClick={() => setActiveIndex(6)}></li>
        </ol>
    )
}

function MainPage() {

    const navigate = useNavigate();
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

    const nodeRef = React.useRef(null);
    const introRef = React.useRef(null);
    const helperRef = React.useRef(null);

    const firstNode = React.useRef(null);
    const [isInViewport, setIsInViewport] = React.useState(false);
    const [isInViewport2, setIsInViewport2] = React.useState(false);
    const [isInViewport3, setIsInViewport3] = React.useState(false);

    // useEffect(() => {

    // window.scrollTo(0, 0);
    // const callback = (entries) => {
    //     entries.forEach(entry => {
    //         switch (entry.target.id) {
    //             case 'orderList':
    //                 entry.isIntersecting && setIsInViewport(true);
    //                 break;
    //             case 'introduce':
    //                 entry.isIntersecting && setIsInViewport2(true);
    //                 break;
    //             case 'helper':
    //                 entry.isIntersecting && setIsInViewport3(true);
    //                 break;
    //             default:
    //                 break;
    //         }
    //     });
    // };

    // const options = { root: null, rootMargin: '0px', threshold: 0.3 };

    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(nodeRef.current);
    // observer.observe(introRef.current);
    // observer.observe(helperRef.current);


    // return () => {
    // observer.disconnect();
    // }
    // }, []);

    const [activeIndex, setActiveIndex] = React.useState(0);

    useEffect(() => {
        switch (activeIndex) {
            case 2:
                setIsInViewport(true);
                break;
            case 3:
                setIsInViewport2(true);
                break;
            case 4:
                setIsInViewport3(true);
                break;
            default:
                break;
        }
    }, [activeIndex, isInViewport, isInViewport2, isInViewport3]);


    return (
        <div>
            <Header activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <div style={{ width: '100%' }}>
                <FullpageIndicator activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                <FullpageContainer activeIndex={activeIndex} setActiveIndex={setActiveIndex} transitionDuration={500} >
                    <FullpageSection>
                        <Box
                            bgcolor={'rgba(0, 0, 0, 0.8)'}
                            position={'absolute'}
                            width={'100%'}
                            height={'100vh'}
                            margin={'auto'}
                            zIndex={0}
                        ></Box>
                        <Box sx={{
                            backgroundImage: `url(${Banner})`,
                            position: 'absolute',
                            zIndex: '-1',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            width: '100%',
                            height: '100vh'
                        }}></Box>
                        <Box margin={'auto'} maxWidth={2000} color={'#e3e3e3'} zIndex={2} >
                            <Typography sx={{ color: '#e3e3e3', fontSize: { md: 50, xs: 27 }, marginBottom: '20px', paddingTop: { md: 30, xs: 30 }, paddingX: { md: 1, xs: 3 } }} textAlign={'center'} variant='h2' marginY={5} >
                                클라이언트의 마케팅 성공 파트너, <br />
                                애드플러스와 함께 매출을 플러스 해보세요.
                            </Typography>
                            <Grid container spacing={1} paddingTop={{ md: 10, xs: 5 }} width={'100%'} maxWidth={1200} margin={'auto'} >
                                <Grid item xs={4} md={4} textAlign={'center'} borderRight={'1px solid #fff'}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <PaidOutlinedIcon sx={{ fill: 'white', width: { xs: 70, md: 100 }, zIndex: 2, height: { xs: 70, md: 100 } }} />
                                    </Box>
                                    <Typography variant='h2' sx={{ color: '#e3e3e3', fontSize: { xs: 15, md: 20 } }} >거래 건수</Typography>
                                    <Typography variant='h2' sx={{ color: '#e3e3e3', fontSize: { xs: 20, md: 30 } }} >{useCountNum(8759)}건</Typography>
                                </Grid>
                                <Grid item xs={4} md={4} textAlign={'center'} borderRight={'1px solid #fff'}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <AccountBoxOutlinedIcon sx={{ fill: 'white', width: { xs: 70, md: 100 }, height: { xs: 70, md: 100 } }} />
                                    </Box>
                                    <Typography variant='h2' sx={{ color: '#e3e3e3', fontSize: { xs: 15, md: 20 } }} >자영업 기업 전문직</Typography>
                                    <Typography variant='h2' sx={{ color: '#e3e3e3', fontSize: { xs: 20, md: 30 } }} >{useCountNum(2632)}개사</Typography>
                                </Grid>
                                <Grid item xs={4} md={4} textAlign={'center'}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <BusinessOutlinedIcon sx={{ fill: 'white', width: { xs: 70, md: 100 }, height: { xs: 70, md: 100 } }} />
                                    </Box>
                                    <Typography variant='h2' sx={{ color: '#e3e3e3', fontSize: { xs: 15, md: 20 } }} >월 평균 문의</Typography>
                                    <Typography variant='h2' sx={{ color: '#e3e3e3', fontSize: { xs: 20, md: 30 } }} >{useCountNum(310)}건</Typography>
                                </Grid>

                            </Grid>
                            <Box textAlign={'center'} paddingTop={{ md: 20, xs: 20 }} >
                                <KeyboardArrowDownIcon sx={{ color: '#e5e5e5', fontSize: 60, animation: 'blink 1.5s infinite', cursor: 'pointer' }} onClick={() => { setActiveIndex(1) }} />
                            </Box>
                        </Box>



                    </FullpageSection>
                    <FullpageSection>

                        <Grid container paddingTop={10} paddingX={{ xs: 3, md: 20 }} maxWidth={2000} margin={'auto'} ref={firstNode}>
                            <Grid item xs={12} md={6} lg={6} paddingX={{ xs: 1, md: 5 }} >
                                <Box width={'100%'} paddingTop={10}>
                                    <Typography fontSize={50} variant='h1'>
                                        <span style={{ color: '#5161b5' }}>THINK</span><br />
                                        TECHNOLOGY</Typography>
                                    <br />
                                    <Typography sx={{ fontFamily: 'KboGothic_L', fontSize: { sm: 12, md: 22 }, color: '#757575' }}>
                                        애드플러스는 다양한 솔루션을 연구하며 바이럴 마케팅을 리드하는 종합광고회사입니다.<br />
                                        애드플러스는 모두가 인정하는 합리적인 방식으로 고객사의 성장을 촉진합니다.<br />
                                        애드플러스는 한계 없는 생각과 기술력을 기반으로 변화를 이끌어가겠습니다.<br />
                                    </Typography>
                                    <Button variant="contained" sx={{
                                        backgroundColor: 'transparent', borderRadius: 20, color: '#3e53bd', marginTop: '20px', fontFamily: 'KboGothic_B', display: 'flex', border: '1px solid #3e53bd', '&:hover': {
                                            background: 'none',
                                        }
                                    }} onClick={() => { navigate('/intro') }} >MORE &nbsp;&nbsp;<ArrowForwardIcon /></Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} padding={3}>
                                <Box width={{ xs: 300, md: 420 }} height={{ xs: 600, md: 760 }} sx={{
                                    backgroundImage: `url('https://cdn.imweb.me/thumbnail/20240530/6c283dc49ca5c.gif')`,
                                    backgroundSize: '100%',
                                    backgroundRepeat: 'no-repeat',
                                    marginLeft: 'auto',
                                    marginRight: { xs: 'auto', md: '0' }
                                }}>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box width={'100%'} height={'100%'} sx={{ position: 'absolute', zIndex: '-1', backgroundImage: `url(${AdPlus_BG})`, backgroundPositionY: '50%', backgroundSize: '', backgroundPositionX: '50%', backgroundRepeat: 'no-repeat' }} ></Box>
                    </FullpageSection>

                    <FullpageSection>
                        <Grid container spacing={0} paddingTop={3} maxWidth={2000} margin={'auto'}>
                            {works.map((work, index) => worksLayout({ work, index, navigate }))}
                        </Grid>
                    </FullpageSection>
                    <FullpageSection>
                        <Box width={'100%'} height={'100%'} sx={{
                            backgroundImage: `url('${LapTop}')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'absolute',
                            zIndex: '-1',
                        }}></Box>
                        <Box width={'100%'} height={'100%'} bgcolor={'rgb(23 33 73 / 80%)'} zIndex={'-1'} position={'absolute'}></Box>

                        <Box width={'100%'} paddingY={10} paddingX={{ xs: 3, md: 30 }} margin={'auto'} maxWidth={2000} >
                            <Typography variant='h1' style={{ marginBottom: '20px', marginTop: '0px', color: '#e3e3e3' }} fontSize={{ xs: 30, md: 40 }}>
                                <span style={{ color: '#6471b5' }}>AD PLUS</span>의 광고는<br />
                                이 순서대로 <span style={{ color: '#6471b5' }}>진행</span>됩니다.
                            </Typography>

                            <hr style={{ border: '2px solid #5161b5', width: 300, margin: 0, marginBottom: '20px' }} />
                            <Transition timeout={500} in={true} nodeRef={nodeRef} id="orderList">
                                <Grid container ref={nodeRef} spacing={0} paddingY={10} paddingX={2} alignContent={'center'} sx={{ marginTop: '30px' }} maxWidth={1400} margin={'auto'}>
                                    {adArray.map((value, index) => {
                                        return (
                                            <Grid item xs={12} sm={6} md={2} key={index} margin={'auto'} style={{ opacity: isInViewport ? 1 : 0, transition: `all 1s`, transitionDelay: `${index / 4}s`, transform: `translateY(${isInViewport ? '0' : '100px'})` }}>
                                                <CircleLayout value={value} index={index} />
                                            </Grid>
                                        )
                                    })}

                                </Grid>
                            </Transition>
                        </Box>
                    </FullpageSection>
                    <FullpageSection>
                        <Box width={'100%'} height={'100%'} sx={{
                            backgroundImage: `url('${SecondSectionImg}')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'absolute',
                            zIndex: '-1',
                        }}></Box>
                        <Box
                            bgcolor={'rgba(0, 0, 0, 0.7)'}
                            width={'100%'}
                            height={'100%'}
                            zIndex={-1}
                            position={'absolute'}
                        ></Box>
                        <Box width={'100%'} paddingY={10} maxWidth={2000} ref={introRef} margin={'auto'} id="introduce" sx={{ opacity: isInViewport2 ? 1 : 0, transition: `all 1s`, transform: `translateY(${isInViewport2 ? '0' : '100px'})` }}>
                            <Typography sx={{ color: '#e5e5e5', fontSize: 40, marginBottom: '20px' }} textAlign={'center'} variant='h2'>
                                디자인 하는 광고 회사
                            </Typography>
                            <hr style={{ border: '1px solid #e5e5e5', width: 250, margin: 'auto', marginBottom: '20px' }} />
                            <Typography sx={{ fontFamily: 'KboGothic_M', color: '#e5e5e5', fontSize: { md: 20, xs: 15 }, marginBottom: '100px' }} textAlign={'center'} paddingX={{ xs: 3, md: 10 }} >
                                전단지, 명함, 브랜드 웹툰, 모션그래픽, 홈페이지까지<br />
                                광고뿐만 아니라 브랜드를 위한 다양한 콘텐츠 제작을 지원합니다.
                            </Typography>

                            <Grid container spacing={1} width={'100%'} marginBottom={5} paddingX={{ xs: 3, md: 30 }} sx={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto'
                            }}>

                                {cards.map((card, index) => CardLayout({ card, index }))}
                            </Grid>
                        </Box>
                    </FullpageSection>
                    <FullpageSection>
                        <Box width={'100%'} height={'100%'} zIndex={'-1'} paddingTop={5} paddingY={20} paddingBottom={{ lg: 15, xs: 5 }} bgcolor={'#161c35'} position={'absolute'} ></Box>
                        <Box margin={'auto'} width={'100%'} maxWidth={2000} paddingX={{ xs: 3, md: 30 }}>
                                <Typography sx={{ color: '#5161b5', fontSize: { xs: 30, md: 40 }, marginBottom: '10px' }} variant='h1' marginY={5} >
                                    협력업체 소개
                                </Typography>
                                <hr style={{ border: '1px solid #5161b5', width: 250, margin: 0, marginBottom: '10px' }} />
                                <Typography sx={{ color: '#e2e2e2', fontSize: { md: 20, xs: 15 }, marginBottom: '20px' }} variant='p' marginBottom={5} >
                                    AD Plus 와 함께하는 업체들을 소개합니다.
                                </Typography>

                                <Box id="helper" ref={helperRef} width={'100%'} height={'auto'} sx={{ justifyContent: 'center', alignItems: 'center', opacity: isInViewport3 ? 1 : 0, transition: `all 1s`, transform: `translateY(${isInViewport3 ? '0' : '100px'})` }} maxWidth={1500} margin={'auto'}>
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
                                <Box id="helper" ref={helperRef} width={'100%'} height={'auto'} sx={{ justifyContent: 'center', alignItems: 'center', opacity: isInViewport3 ? 1 : 0, transition: `all 1s`, transform: `translateY(${isInViewport3 ? '0' : '100px'})`, display: { xs: 'block', md: 'none' } }} maxWidth={1500} margin={'auto'}>
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
                    </FullpageSection>
                    <FullpageSection>
                        <Box width={'100%'} margin={'auto'} bgcolor={'#f5f5f5'}>
                            <Contacts />
                        </Box>
                    </FullpageSection>
                </FullpageContainer>
            </div >
        </div >
    );
}

export default MainPage;
