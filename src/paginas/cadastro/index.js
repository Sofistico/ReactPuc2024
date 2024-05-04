import { Component } from "react";
import firebase from "./Firebase"

class Cadastro extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            senha: ""
        }
        this.criarUsuario = this.criarUsuario.bind(this)
    }

    async criarUsuario(){
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    }

    render(){
        return (
            <div>
                <div>
                    <input type="text" placeholder="E-Mail" onChange={(e) => this.setState({ email: e.target.value })}></input>M
                    <input type="password" name="senha" onChange={(e) => this.setState({senha: e.target.value})}></input>
                </div>
            </div>
        )
    }
}

export default Cadastro;