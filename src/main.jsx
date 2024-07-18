import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
// import router from './router.js'
import { BrowserRouter } from 'react-router-dom'

 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <App/>
    </BrowserRouter>    
  </React.StrictMode>,
)
