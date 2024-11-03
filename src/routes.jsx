import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Buttons from './buttons';
import Products from './Products';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Buttons />,
      },
      {
        path: '/:id',
        element: <Products />,
      },
    ],
  },
]);
