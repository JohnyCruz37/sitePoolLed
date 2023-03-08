// PRINCIPAIS ELEMENTOS COMO NAVBAR E FOOTER
import { Outlet } from "react-router-dom"

import './App.css'
import Header from "./componentes/Header/Header"

function App() {

  return (
    <div className="App">
      <Outlet />
      <Header />
    </div>
  )
}

export default App
