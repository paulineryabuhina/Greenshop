import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.scss';
import './styles/reset.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/index.tsx';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const routes = createBrowserRouter ([
  {
    path: '/',
    element: <Home />
  },
  // {

  // }
]);

root.render(<RouterProvider router = {routes} />);

