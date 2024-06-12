import React from "react";
import { useNavigate } from "react-router";
import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from './Footer';
import Contact_US from '../assets/img/contact-us.jpg';

function Contact(props) {

  const navigate = useNavigate();

    return (
      <div>
        <Grid container paddingY={20} paddingX={{ xs: 3, md: 30 }} maxWidth={2000} margin={'auto'}>
          <Grid item xs={12} md={6} lg={6} >
            <Box width={'100%'} sx={{ fontSize: 23 }} paddingBottom={3}>
              <Typography variant="h1" color={'#5161b5'} fontSize={{ xs: 30, md: 40 }}>문의하기</Typography>
                <hr style={{ width: '100%', height: '1px', backgroundColor: '#5161b5' }} />
              <Typography sx={{ fontSize: { xs: 15, md: 20 }, color: '#757575' }} variant="p">
                저희는 영업전화와 영업사원이 없습니다.<br />
                콜드콜, 콜드메일도 보내지 않습니다.<br />
                <br />
                오로지 해당 시트를 통해 문의주신 분들에 한에서만 회신 드리고 있습니다.<br />
                그러니 진심으로 저희와 함께 하고자 하는 분이라면, 꼼꼼하게 작성 부탁드립니다.
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: '#3e53bd', marginTop: '20px', fontFamily: 'KboGothic_M', display: 'flex' }} onClick={() => { navigate('/contact') }} >문의하러가기 &nbsp;&nbsp;<ArrowForwardIcon /></Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6} >
            <Box width={{ xs: 224, md: 300 }} height={{ xs: 216, md: 300 }} sx={{
              backgroundImage: `url(${Contact_US})`,
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              margin: 'auto'
            }}>

            </Box>
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
}

export default Contact;