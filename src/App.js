// import logo from './logo.svg';
import React, { Component }  from 'react';
import './App.css';
import Form from './pages/Form.jsx';
import Pcosform from './pages/Pcosform.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/about",
    element: <About/>,
  },
  {
    path: "/PCO",
    element: <Pcosform/>,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);



function App() {
  return (
    <div className="App">
        <Navbar />
        {/* <About /> */}
        
        {/* <Form /> */}
        {/* <Pcosform/> */}
        <RouterProvider router={router} />
        {/* <Footer /> */}
    </div>
  );
}

export default App;
