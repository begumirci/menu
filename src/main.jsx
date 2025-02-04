import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes.jsx';
import Provider from './Provider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);
