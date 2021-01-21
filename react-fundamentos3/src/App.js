import React, { Component } from 'react';
import './global.css'

class Hijo extends Component {

    manejadorClick = () => {
        this.props.onSaludar('Ninja en React')
    }

    render() {
        return (
            <div className='box blue'>
                <h1>Hijo</h1>
                <button onClick={this.manejadorClick}> Saludar</button>
            </div>
        )
    }
}

class App extends Component {

    state = {
        name: ''
    }

    manejador = (name) => {
        this.setState({ name })
    }

    render() {
        return (
            <div className="box red">
                <Hijo
                    onSaludar={this.manejador} />
                <h1>Nombre: {this.state.name}</h1>
            </div>
        )
    }
}




export default App