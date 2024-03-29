import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import Nav from "./components/Nav";
import Inicio from "./components/Inicio";
import Perfil from "./components/Perfil";
import Crypto from "./components/Crypto";
import Sign from "./components/Sign";
import Log from "./components/Log";
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import RequireAuth from "./components/RequireAuth";
import AuthContext from "./store/auth-context";

function App() {

  const authCtx = useContext(AuthContext);

  return (
    
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/crypto" element={<Crypto />} />   
        <Route path="/sign" element={<Sign />} />
        <Route path="/log" element={<Log />} />   
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
