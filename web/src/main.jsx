
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Children, useState } from 'react'
import ReactDOM from 'react-dom/client'

import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'

import Layout from './layout.jsx'
import Home from './Home.jsx'
import Aboutus from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User'
import Footer from './Footer'


// const router = createBrowserRouter([
//   {
//     path : '/',
//     element :<Layout/>
//     children:[
// {
//   path : '',
//     element :<Home/>
// },
// {
//   path : 'aboutus',
//     element :<Aboutus/>
// },
// {
//   path : 'contact',
//     element :<Contact/>
// },
// {
//   path : 'footer',
//     element :<Footer/>
// },
// {
//   path : 'header',
//     element :<Header/>
// }
//     ]
//   }
// ])

// createRoot(document.getElementById('root')).render(
  
//     <App />
  
// )

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/header" element={<Header />} />
    </Route>
  )
)

createRoot