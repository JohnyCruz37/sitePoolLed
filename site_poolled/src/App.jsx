// PRINCIPAIS ELEMENTOS COMO NAVBAR E FOOTER
import { Outlet } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import BarraNav from "./componentes/BarraNav/BarraNav";
import Footer from "./componentes/Footer/Footer";

function App() {

  return (
    <div className="App">
      <BarraNav/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
