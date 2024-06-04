import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import FirstSectionImg from '../assets/img/main_1.png';

function Contact() {

    return (
        <Grid container paddingY={10} paddingX={{ xs: 3, md: 30}}>
          <Grid item xs={12} md={6} lg={6} padding={3}>
            <Box width={'100%'} paddingTop={10} sx={{ fontSize: 23 }}>
              <h1 style={{ color: '#5161b5' }}>문의하기</h1>
                <hr style={{ width: '100%', height: '3px', backgroundColor: '#5161b5' }} />
              <Typography sx={{ fontFamily: 'KboGothic_L', fontSize: { sm: 12, md: 20 }, color: '#757575' }}>
                저희는 영업전화와 영업사원이 없습니다.<br />
                콜드콜, 콜드메일도 보내지 않습니다.<br />
                <br />
                오로지 해당 시트를 통해 문의주신 분들에 한에서만 회신 드리고 있습니다.<br />
                그러니 진심으로 저희와 함께 하고자 하는 분이라면, 꼼꼼하게 작성 부탁드립니다.
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: '#3e53bd', marginTop: '20px' }} >Contained</Button>
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
    );
}

export default Contact;