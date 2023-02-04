import React, { useState } from 'react';
import { Box, Button, Container, MenuItem, Paper, TextField, Typography } from '@mui/material';
import { createProduct, getProducts } from '../api';
import { useMutation, useQuery } from 'react-query';

const ProductsPage = () => {
    const [form, setForm] = useState({
        productPrice: '',
        productName: '',
        productColor: '',
        productQuality: '',
    });
    const { data } = useQuery('products', getProducts);
    const mutation = useMutation((form) => {
        return createProduct(form);
    });

    const handleCreateProduct = () => {
        mutation.mutate(form);
    };

    const handleChange = (e) => {
        const name = e.target.name;
        setForm((form) => ({ ...form, [name]: e.target.value }));
    };

    const renderProducts = data?.data?.map((product) => (
        <Box key={product.id} sx={{ p: 2, bgcolor: 'gray', color: 'white', mb: 1 }}>
            <Typography>{product.productName}</Typography>
            <Typography>{product.productPrice}</Typography>
            <Typography>{product.productColor}</Typography>
            <Typography>{product.productQuality}</Typography>
        </Box>
    ));

    return (
        <Container
            maxWidth="lg"
            sx={{ display: 'flex', height: 'calc(100vh - 80px)', gap: 2, py: 4 }}
        >
            <Paper sx={{ flex: 1, borderRadius: 2, overflow: 'hidden' }}>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 4 }}
                >
                    <TextField required label="Name" name="productName" onChange={handleChange} />

                    <TextField
                        required
                        type="number"
                        defaultValue="0"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label="Price"
                        name="productPrice"
                        onChange={handleChange}
                    />

                    <TextField label="Color" name="productColor" onChange={handleChange} />

                    <TextField
                        select
                        label="Quality"
                        name="productQuality"
                        onChange={handleChange}
                        defaultValue=""
                    >
                        <MenuItem key="normal" value="normal">
                            Normal
                        </MenuItem>
                        <MenuItem key="good" value="good">
                            Good
                        </MenuItem>
                        <MenuItem key="hight quality" value="hight quality">
                            Hight quality
                        </MenuItem>
                    </TextField>
                </Box>
                <Button onClick={handleCreateProduct}>Create Product</Button>
            </Paper>

            <Paper sx={{ flex: 1, borderRadius: 2, overflow: 'hidden' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>{renderProducts}</Box>
            </Paper>
        </Container>
    );
};

export default ProductsPage;
