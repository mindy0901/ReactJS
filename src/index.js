import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';

import './index.css';
import theme from './theme';
import { Layout } from './components';
import { AuthPage, ErrorPage, ProductsPage, HomePage } from './pages';

const router = createBrowserRouter([
    { path: 'auth', element: <AuthPage /> },
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'products', element: <ProductsPage /> },
        ],
    },
]);

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </QueryClientProvider>
);
