import { Component } from 'react';
import './App.css';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      senha: "",
      userValido: "epafimonas@mail.com",
      senhaValida: "teste123",
      autenticado: undefined
    }
    this.muda.bind(this)
    this.autenticar = this.autenticar.bind(this)
    this.renderAutenticacao = this.renderAutenticacao.bind(this)
  }

  muda(event, key) {
    let state = this.state;
    if (key === "email") {
      state.email = event.target.value;
    }
    else if (key === "senha") {
      state.senha = event.target.value;
    }
    this.setState(state);
  }

  autenticar() {
    let state = this.state;
    if (state.email === state.userValido && state.senha === state.senhaValida) {
      state.autenticado = true;
    }
    else {
      state.autenticado = false;
    }
    this.setState(state);
  }

  renderAutenticacao() {
    if(this.state.autenticado != undefined){
      if (this.state.autenticado)
        return (<div>Acessado com sucesso!</div>)
      else
        return (<div>Usuário ou senha incorretos!</div>)
    }
  }

  render() {
    return (
      <div>
        <div>
          <input type='text' size="20" name="email" onChange={(e) => this.muda(e, "email")}></input>
        </div>
        <div>
          <input type='password' size="20" name="senha" onChange={(e) => this.muda(e, "senha")}></input>
        </div>
        <button onClick={this.autenticar}>Acessar</button>
        <this.renderAutenticacao></this.renderAutenticacao>
      </div>)
  }
}

function App() {
  return (
    <div className='App-header'>
      <h1 className='App-header'>Login</h1>
      <Login></Login>
    </div>
  );
}

export default App;