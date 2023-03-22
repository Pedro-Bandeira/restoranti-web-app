import { useEffect } from 'react';
import React from 'react'
import './App.css'
import { useSolicitacoes } from './hooks'
import { Request, Header } from './components'
import {Solicitacoes, Employees, Servicos, Tables} from './pages'
import ReactDOM from 'react-dom/client';;
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Home</div>
    },
    {
      path: "/solicitacoes",
      element: <Solicitacoes/>
    },
    {
      path: "/cadastro-mesas",
      element: <Tables />
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
  

  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
