// PRINCIPAIS ELEMENTOS COMO NAVBAR E FOOTER
import { Outlet } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import BarraNav from "./componentes/BarraNav/BarraNav";

function App() {

  return (
    <div className="App">
      <BarraNav/>
      <Outlet />
    </div>
  )
}

export default App
