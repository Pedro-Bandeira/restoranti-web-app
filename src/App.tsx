import './App.css'
import { Header, Sidebar, Navbar } from './components'
import {Solicitacoes, Employees, Servicos, Tables, FreeTables} from './pages'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { useState } from 'react';

const App = () => {

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
      path: "/cadastros/cadastro-mesas",
      element: <Tables />
    },
    {
      path: "/mesas",
      element: <FreeTables />
    },
    {
      path: "/criar-tag-qrcode",
      element: <div>Criar Tags e QR Codes</div>
    }
  ])

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true)
  }
  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className='container'>
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} sidebarClose={closeSidebar} />
      <div style={{gridArea: "main", padding: 20}}>
        <RouterProvider router={router}/>
      </div>
    </div>
  )
}

export default App;