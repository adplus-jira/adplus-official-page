import React from 'react';
import '../assets/css/common.css';
import { Box } from '@mui/material';
import Banner from '../assets/img/main_banner.jpg';


function MainPage() {
  return (
    <div>
      <div style={{ width: '100%', height: '200vh'}}>
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
          {/* <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            
          </div> */}
        </Box>
      </div>
    </div>
  );
}

export default MainPage;
