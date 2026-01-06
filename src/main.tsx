import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/globals.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import RootLayout from '@/app/RootLayout';
import RootPage from '@/app/RootPage';

const root = document.getElementById('root');

if(!root)
  throw new Error('Root element not found');

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Portfolio/" element={<RootLayout />} >
          <Route index element={<RootPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
