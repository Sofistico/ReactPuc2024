import React, { Component } from "react";
import logo from "./logo.svg"
import "./Test.css";
import "./App.css";

class World extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Joao",
            counter: 0
        }

        this.aumentar = this.aumentar.bind(this)
    }
    render() {
        return (
            <div>
                <h1 className="helloWorld">{this.props.text} {this.state.name}!</h1>
                <h2>{this.state.counter}</h2>
                <button onClick={this.aumentar}>+</button>
                <img src={logo} className="App-logo"></img>
            </div>)
    }

    aumentar(){
        let state = this.state;
        state.counter += 1;
        this.setState(state);
    }
}

function HelloWorld() {
    return (<div>
        <World text="Hello World!"></World>
    </div>)
}

export default HelloWorld;