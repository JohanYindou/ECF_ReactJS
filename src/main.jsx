import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './pages/App.jsx';
import Compétances from './pages/Compétances.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx'
import '../styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil />,
  },
  {
    path: '/compétances',
    element: <Compétances />,
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