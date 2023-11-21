import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './pages/Accueil.jsx';
import Competances from './pages/Compétances.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx'
import './styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil />,
  }
  ,
  {
    path: '/compétances',
    element: <Competances />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
 ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);