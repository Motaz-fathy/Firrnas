// src/routes.js
import React, { lazy } from 'react';

// Lazy-loaded components
const Home = lazy(() => import('../pages/Home/Home'));
const Contact = lazy(() => import('../pages/Contact/Contact'));

// ** you can add instance here . 

const routes = [
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
];

export default routes;
