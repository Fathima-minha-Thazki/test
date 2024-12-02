import React from 'react';
import { useCart } from '../Context/CartContext';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const products = [
  { id: 1, name: 'Product 1', price: 100, description: 'High-quality product 1', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 200, description: 'High-quality product 2', image: 'https://via.placeholder.com/150' },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Typography variant="h6" color="primary">${product.price}</Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => addToCart(product)}
                sx={{ marginTop: 2 }}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
