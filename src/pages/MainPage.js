import React from 'react';
import '../assets/css/common.css';
import { Box, Grid, Typography } from '@mui/material';
import Banner from '../assets/img/main_banner.jpg';
import FirstSectionImg from '../assets/img/main_1.png';
import Contacts from '../components/Contacts';
import SecondSectionImg from '../assets/img/main_2.jpg';
import MuiImageSlider from 'mui-image-slider';

const CircleLayout = ({ value, index }) => {

  return (
    <div>
      <Box
        key={index}
        width={'130px'}
        height={'130px'}
        sx={{
          border: '3px solid #3e53bd',
          borderRadius: '50%',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'KboGothic_M',
          fontSize: 17,
          margin: 'auto',
          marginBottom: '10px',
          position: 'relative',
          '&:hover': {
            backgroundColor: '#3e53bd',
            color: 'white'
          }
        }}
      >
        <p style={{ fontSize: 40 }}>{ (index + 1) }</p>
        <hr
          style={{
            position: 'absolute', // Add this line to position the line
            width: '100%',
            margin: '0 auto',
            left: 0, // Add this line to position the line
            right: 0, // Add this line to position the line
            bottom: '-10px', // Add this line to position the line
            border: 'none',
            borderTop: '2px dashed #3e53bd'
          }}
        />
      </Box>
      <p style={{ fontSize: 20 }}>{ value }</p>
    </div>
  );
}


function MainPage() {
  const adArray1 = ["전화 또는 방문상담", "광고 매체 선정", "광고 서비스 제안"];
  const adArray2 = ["일정 및 예산 확정", "광고 집행", "월별 성과보고"];
  const images = [
    FirstSectionImg, SecondSectionImg
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
          </Box>
        </Box>
        <Grid container paddingY={10} paddingX={{ xs: 3, md: 30}}>
          <Grid item xs={12} md={6} lg={6} padding={3}>
            <Box width={'100%'} paddingTop={10} sx={{ fontSize: 23 }}>
              <h1><span style={{ color: 'green' }}>재계약률</span>을 보고<br />마케팅사를 고르세요</h1>
              <Typography sx={{ fontFamily: 'KboGothic_L', fontSize: { sm: 12, md: 20 }, color: '#757575' }}>
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
        <Grid container spacing={0} paddingY={3}>
          <Grid item xs={12} md={3} lg={3}>
            <Box width={'100%'} height={{ xs: 400, md: 500}} sx={{ 
                backgroundImage: `url('https://cdn-pro-web-228-183.cdn-nhncommerce.com/handrak_godomall_com/data/skin/front/websre_WB01/img/split/split-viral2.png')`,
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
          <Grid item xs={12} md={3} lg={3}>
            <Box width={'100%'} height={{ xs: 400, md: 500}} sx={{ 
                backgroundImage: `url('https://cdn-pro-web-228-183.cdn-nhncommerce.com/handrak_godomall_com/data/skin/front/websre_WB01/img/split/split-viral2.png')`,
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
          <Grid item xs={12} md={3} lg={3}>
            <Box width={'100%'} height={{ xs: 400, md: 500}} sx={{ 
                backgroundImage: `url('https://cdn-pro-web-228-183.cdn-nhncommerce.com/handrak_godomall_com/data/skin/front/websre_WB01/img/split/split-viral2.png')`,
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
          <Grid item xs={12} md={3} lg={3}>
            <Box width={'100%'} height={{ xs: 400, md: 500}} sx={{ 
                backgroundImage: `url('https://cdn-pro-web-228-183.cdn-nhncommerce.com/handrak_godomall_com/data/skin/front/websre_WB01/img/split/split-viral2.png')`,
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
        </Grid>
        
        {/* 영업 순서 */}
        <Box width={'80%'} textAlign={'center'} paddingX={3} sx={{ marginX: 'auto', marginTop: '0px' }} paddingY={5}>
          <h1>바이애드의 광고는 이렇게 시작됩니다.</h1>
          <Grid container spacing={3} paddingX={2} alignContent={'center'} sx={{ marginTop: '30px' }}>
            { adArray1.map((value, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={index} margin={'auto'}>
                    <CircleLayout value={value} index={index} />
                  </Grid>
                )
            }) }
          </Grid>
          <Grid container spacing={3} paddingX={2} alignContent={'center'} sx={{ marginTop: '30px' }}>
            { adArray2.map((value, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={index} margin={'auto'}>
                    <CircleLayout value={value} index={index+3} />
                  </Grid>
                )
            }) }
          </Grid>
        </Box>

        
        <Box width={'100%'}  >
            <Box width={'100%'} height={500} sx={{ 
              backgroundImage: `url('${SecondSectionImg}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
             }}>
              <Box
                bgcolor={'rgba(0, 0, 0, 0.7)'}
                position={'absolute'}
                width={'100%'}
                height={500}
                zIndex={2}
              >
                <Typography sx={{ fontFamily: 'KboGothic_B', color: 'white', fontSize: 40 }} variant='h1' textAlign={'center'} marginTop={5} >
                  안녕하세요 반가워요!
                </Typography>
                <MuiImageSlider images={images} autoplay />
              </Box>
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
