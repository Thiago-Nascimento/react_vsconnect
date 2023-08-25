import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom"

// import App from './App'
import './index.css'
import Home from './pages/Home'
import Header from './components/Header'
import ListaDevs from './pages/ListaDevs'
import ListaServicos from './pages/ListaServicos'
import Footer from './components/Footer'
import PerfilUsuario from './pages/PerfilUsuario'
import CadastroUsuario from './pages/CadastroUsuario'
import Login from './pages/Login'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='listadevs' element={ <ListaDevs /> } />
        <Route path='listaservicos' element={ <ListaServicos /> } />
        <Route path='perfil/:idUsuario' element={ <PerfilUsuario /> } />
        <Route path='cadastrousuario' element={ <CadastroUsuario /> } />
        <Route path='login' element={ <Login /> } />
        
      </Routes>
      <Footer />      
    </BrowserRouter>
  </React.StrictMode>
)
