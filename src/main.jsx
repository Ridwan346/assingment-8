import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import App from './App.jsx'
import Home from './Home.jsx';
import Baneer from './nav and banner/Baneer.jsx';
import SingelAppData from './nav and banner/SingelAppData.jsx';
import Allapps from './all app/Allapps.jsx';
import AllSingleApp from './all app/AllSingleApp.jsx';
import InstallApp from './all app/InstallApp.jsx';
import Error from './Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Home,
    errorElement:<Error></Error>,
    children:[
      {
        index:true,
        loader:()=>fetch('/eatt.json'),
        Component:Baneer
      },
      {
      path: 'single/:id',
       loader: () => fetch('/eatt.json'),
      Component: SingelAppData
     },
     {
      path:'allApp',
      loader: () => fetch('/sholo.json'),
      Component:Allapps
     },
     {
      path:'sholo/:id',
      loader: () => fetch('/sholo.json'),
      Component:AllSingleApp
     },
     {
      path:'installed',
      loader: () => fetch('/sholo.json'),
      Component:InstallApp
     }
     
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
