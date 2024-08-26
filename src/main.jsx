import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Auth0ProviderWithHistory from './auth/Auth0Provider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <StrictMode>
        <App />
      </StrictMode>
    </Auth0ProviderWithHistory>
  </BrowserRouter>
)
