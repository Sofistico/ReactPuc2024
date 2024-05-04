import React, { Component } from 'react';
import firebase from '../../Firebase';

class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            dtaNascimento: ""
        };
    }

    async componentDidMount() {
        firebase.auth().onAuthStateChanged(async (usuario) => {
            if (usuario) {
                var uid = usuario.uid;

                await firebase.firestore().collection("usuario").doc(uid).get()
                    .then((retorno) => {

                        this.setState({
                            nome: retorno.data().nome,
                            sobrenome: retorno.data().sobrenome,
                            dtaNascimento: retorno.data().dtaNascimento
                        });
                    });
            } else {
                window.location.href = "./";
            }
        })
    }

    render() {
        return (
            <div>
                <div>
                    Nome: {this.state.nome}
                </div>
                <div>
                    Sobrenome: {this.state.sobrenome}
                </div>
                <div>
                    Data de Nascimento: {this.state.dtaNascimento}
                </div>
            </div>
        );
    }
}

export default Principal;