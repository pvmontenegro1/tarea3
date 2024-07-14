import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Te invito a mi fiesta de cumpleaños
                    
                </Typography>
                <Button color="inherit"  >Inicio</Button>
                <Button color="inherit">Acerca de</Button>
                <Button color="inherit">Contacto</Button>
            </Toolbar>
        </AppBar>
    );
}
