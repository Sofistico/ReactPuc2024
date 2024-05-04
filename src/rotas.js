import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./paginas/login";
import Principal from "./paginas/principal";
import Cadastro from "./paginas/cadastro";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/principal" Component={Principal} />
                <Route path="/cadastro" Component={Cadastro} />
                <Route path="/" Component={Login} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas