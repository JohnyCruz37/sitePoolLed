// DEFINIÇÃO DE ROTAS

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from './App'
import Home from "./Paginas/Home"
import Sobre from './Paginas/Sobre'
import Servicos from './Paginas/Servicos'
import Galeria from './Paginas/Galeria'
import Contato from './Paginas/Contato'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='/servicos' element={<Servicos/>} />
          <Route path='/galeria' element={<Galeria/>} />
          <Route path='/contato' element={<Contato/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
