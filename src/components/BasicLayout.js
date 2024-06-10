import React from "react";
import MainBanner from "../assets/img/main_banner.jpg";
import { Box, Typography } from "@mui/material";


export default function BasicLayout({ title, subTitle, children }) {

    return (
        <div>
            <Box sx={{
                backgroundImage: `url(${MainBanner})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100%',
                height: '70vh'
            }}>
                <Box
                    bgcolor={'rgba(0, 0, 0, 0.4)'}
                    position={'absolute'}
                    top={0}
                    left={0}
                    width={'100%'}
                    height={'70vh'}
                >

                    <Typography sx={{ fontFamily: 'KboGothic_M', color: '#e5e5e5', fontSize: { md: 50, xs: 40 }, marginBottom: '20px', paddingTop: 30 }} textAlign={'center'} variant='h1' marginY={5} >
                        <Typography sx={{ fontFamily: 'KboGothic_B', color: '#c7c7c7', fontSize: { md: 20, xs: 20 }, margin: 0 }} textAlign={'center'} variant='p' >
                            {subTitle}<br />
                        </Typography>
                        {title}
                    </Typography>
                    <hr style={{ width: '40%', margin: 'auto', backgroundColor: '#e5e5e5', height: '2px' }} />
                </Box>
            </Box>
            <Box minHeight={'100vh'}>
                {children}
            </Box>
        </div>
    );
}