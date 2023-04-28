import './App.css'
import { Sidebar, Navbar, Footer } from './components'
import { Solicitacoes, Employees, Tables, FreeTables, Home, Registers, CreateTagQrCode, ErrorPage } from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import { ProtectedLayout } from './components/ProtectedLayout';
import { AuthPage } from './pages/AuthPage';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <AuthPage />,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: "/",
      element: <ProtectedLayout><Home /></ProtectedLayout>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: "/solicitacoes",
      element: <ProtectedLayout><Solicitacoes/></ProtectedLayout>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: "/cadastros/mesas",
      element: <ProtectedLayout><Tables /></ProtectedLayout>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: "/cadastros/funcionarios",
      element: <ProtectedLayout><Employees /></ProtectedLayout>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: "/mesas",
      element: <ProtectedLayout><FreeTables /></ProtectedLayout>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: "/gerar-tag-qrcode",
      element: <ProtectedLayout><CreateTagQrCode /></ProtectedLayout>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: "/cadastros",
      element: <ProtectedLayout><Registers /></ProtectedLayout>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: "*",
      element: <AuthPage />,
      errorElement: <ErrorPage></ErrorPage>
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
    <>
      <div className='container'>
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} sidebarClose={closeSidebar} />
        <Sidebar sidebarOpen={sidebarOpen} sidebarClose={closeSidebar} />

        <div style={{gridArea: "main", padding: 20}}>
          <RouterProvider router={router}/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App;