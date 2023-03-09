// PRINCIPAIS ELEMENTOS COMO NAVBAR E FOOTER
import { Outlet } from "react-router-dom"

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./componentes/Header/Header";

function App() {

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
