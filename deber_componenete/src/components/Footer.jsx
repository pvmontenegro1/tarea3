import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

export default function Footer() {
    return (
        <AppBar position="static" component="footer" color="primary">
            <Container>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Copyrigth 2024
                    </Typography>
                    <IconButton color="inherit" href="https://www.facebook.com" target="_blank">
                        <Facebook />
                    </IconButton>
                    <IconButton color="inherit" href="https://www.twitter.com" target="_blank">
                        <Twitter />
                    </IconButton>
                    <IconButton color="inherit" href="https://www.instagram.com" target="_blank">
                        <Instagram />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
