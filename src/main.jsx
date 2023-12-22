import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider  client={QueryClient}>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
