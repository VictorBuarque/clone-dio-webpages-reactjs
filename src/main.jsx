import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider as Router,
} from "react-router-dom";

import { Home } from './routes/pages/home/index';
import { Login } from './routes/pages/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router router={router} />
  </React.StrictMode>,
)
