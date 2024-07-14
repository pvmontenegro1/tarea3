import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Container } from '@mui/material';

export default function ProductCard({ product }) {
    return (
        <Container 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                minHeight: '10vh', 
                textAlign: 'center' 
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                ¿Qué te gustaría comprarme en mi fiesta de cumpleaños?
            </Typography>
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    component="img"
                    alt={product.name}
                    height="140"
                    image={product.image}
                    title={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${product.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                     Comprar Ahora
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
}
