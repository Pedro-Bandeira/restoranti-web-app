import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>
  },
  {
    path: "/solicitacoes",
    element: <App/>
  },
  {
    path: "/cadastro-mesas",
    element: <div>Cadastro de Mesas</div>
  },
  {
    path: "/mesas-disponiveis",
    element: <div>Mesas Dispoíveis</div>
  },
  {
    path: "/criar-tag-qrcode",
    element: <div>Criar Tags e QR Codes</div>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
