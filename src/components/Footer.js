import React from 'react';
import logo from '../assets/img/logo.png'; // Import your logo image
import Box from '@mui/material/Box'; // Import Box component from Material-UI

// 

const Footer = () => {
    return (
        <Box component="footer" sx={{ backgroundColor: 'black', color: 'white', padding: '20px', textAlign: 'center' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Company Logo" style={{ marginRight: '10px', height: '30px' }} />
                    <div>
                        <p style={{ marginRight: '10px', fontSize: '14px' }}>© 2022 Your Company</p>
                        <p style={{ marginRight: '10px', fontSize: '14px' }}>Company Name: ABC Company</p>
                        <p style={{ marginRight: '10px', fontSize: '14px' }}>Representative: John Doe</p>
                        <p style={{ marginRight: '10px', fontSize: '14px' }}>Business Registration Number: 1234567890</p>
                        <p style={{ marginRight: '10px', fontSize: '14px' }}>Address: 123 Main Street, City, Country</p>
                        <p style={{ marginRight: '10px', fontSize: '14px' }}>Email: info@company.com</p>
                        <p style={{ marginRight: '10px', fontSize: '14px' }}>Contact: +1 123-456-7890</p>
                    </div>
                </Box>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ display: 'inline-block', marginRight: '10px' }}>
                        <p style={{ color: 'white', textDecoration: 'none' }}>Home</p>
                    </li>
                    <li style={{ display: 'inline-block', marginRight: '10px' }}>
                        <p style={{ color: 'white', textDecoration: 'none' }}>About</p>
                    </li>
                    <li style={{ display: 'inline-block', marginRight: '10px' }}>
                        <p style={{ color: 'white', textDecoration: 'none' }}>Contact</p>
                    </li>
                </ul>
            </Box>
        </Box>
    );
};

export default Footer;
