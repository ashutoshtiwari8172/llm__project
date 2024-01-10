import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import DiagnosticCenter from './pages/DiagnosticCenter';

import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Insurance from './pages/Insurance';
// import { About,Features } from './containers';
// import { About, Header } from './containers';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div><App /></div>,
    },
    //  {
    //    path: "/about",
    //   element: <div>< About/></div>,
    // },
    // {
    //   path: "/home",
    //   element: <div><Header/></div>,
    // },
    // {
    //   path: "/features",
    //   element: <div><Features/></div>,
    // },
    
      {
        path: "/diagnosticCenter",
        element: <div><DiagnosticCenter /></div>,
      },
      {
        path: "/insurance",
        element: <div><Insurance /></div>,
      },
     
      
      
  ]);


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );