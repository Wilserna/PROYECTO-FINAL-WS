import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ContenedorTarjeta from './components/ContenedorTarjetas/ContenedorTarjeta';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import DetalleTarjeta from "./components/Tarjetas/DetalleTarjeta";
// import Tarjetas from './components/Tarjetas'

function App() {

  return (
    <>
      <NavBar/>
      {/* <DetalleTarjeta/> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Tarjetas' element={<ContenedorTarjeta/>}/>
        {/* <Route path='/tarjetas/:id' element={<DetalleTarjeta/>}/> */}
          
      </Routes>
      <Footer/>
    </>
  )
}

export default App
