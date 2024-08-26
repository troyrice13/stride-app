// src/auth/auth0-provider.jsx
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();

  const domain = 'dev-djnk3sshry2xk6ds.us.auth0.com';
  const clientId = 'z06Lrc25h3htU5SUZnO1XBlwoIDfB6TB';

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || '/itinerary');
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
