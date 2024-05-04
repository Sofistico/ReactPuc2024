import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./paginas/login";
import Home from "./paginas/home";
import Cadastro from "./paginas/cadastro";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/cadastro" Component={Cadastro} />
                <Route path="/login" Component={Login} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas