import './App.css'
import { Header, Sidebar, Navbar } from './components'
import {Solicitacoes, Employees, Servicos, Tables, FreeTables, Home, Registers, CreateTagQrCode} from './pages'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { useState } from 'react';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/solicitacoes",
      element: <Solicitacoes/>
    },
    {
      path: "/cadastros/mesas",
      element: <Tables />
    },
    {
      path: "/cadastros/funcionarios",
      element: <Employees />
    },
    {
      path: "/mesas",
      element: <FreeTables />
    },
    {
      path: "/gerar-tag-qrcode",
      element: <CreateTagQrCode />
    },
    {
      path: "/cadastros",
      element: <Registers />
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