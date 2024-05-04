import React, { Component } from "react";
import firebase from '../../Firebase';
import { Link } from "react-router-dom";

class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            senha: "",
            nome: "",
            sobrenome: "",
            dtaNascimento: "",
            exibir_mensagem: ""
        }
        this.criarUsuario = this.criarUsuario.bind(this)
    }

    async criarUsuario() {
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
            .then(async (retorno) => {

                await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                    nome: this.state.nome,
                    sobrenome: this.state.sobrenome,
                    dtaNascimento: this.state.dtaNascimento
                })

                this.setState({
                    exibir_mensagem: "Cadastrado com Sucesso!"
                })
            })
    }

    render() {
        return (
            <div>
                <h1>Página de Cadastro</h1>
                <div>
                    <input type="text" placeholder="E-Mail" onChange={(e) => this.setState({ email: e.target.value })}></input>
                </div>
                <div>
                    <input type="password" placeholder="Senha" onChange={(e) => this.setState({ senha: e.target.value })}></input>
                </div>
                <div>
                    <input type="text" placeholder="Nome" onChange={(e) => this.setState({ nome: e.target.value })}></input>
                </div>
                <div>
                    <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({ sobrenome: e.target.value })}></input>
                </div>
                <div>
                    <input type="date" placeholder="Data de Nascimento" onChange={(e) => this.setState({ dtaNascimento: e.target.value })}></input>
                </div>
                <div style={{ color: "blue" }}>{this.state.exibir_mensagem}</div>
                <div>
                    <button onClick={this.criarUsuario}>Gravar</button>
                </div>
                <div>
                    <Link to="/">Já tem cadastro?</Link>
                </div>
            </div>
        )
    }
}

export default Cadastro;