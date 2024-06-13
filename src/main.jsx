import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
