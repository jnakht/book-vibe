import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Router, RouterProvider } from 'react-router-dom'
import { router } from './assets/Router/Router.jsx'
import toast, { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />

  </StrictMode>,
)
