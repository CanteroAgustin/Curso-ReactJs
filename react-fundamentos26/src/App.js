import React, { Component } from 'react';

class Boton extends Component {

    state = {
        dispararError: false
    }

    dispatchError = () => {
        this.setState(
            { dispararError: true }
        )
    }

    render() {

        if (this.state.dispararError) {
            throw new Error('Lo siento he fallado')
        }

        return (
            <button onClick={this.dispatchError}>
                Boton con Bugg
            </button>
        )
    }
}

class LimiteErrores extends Component {
    state = {
        tieneError: false
    }

    componentDidCatch() {
        this.setState({ tieneError: true })
    }

    render() {

        if(this.state.tieneError){
            return <div>
                Wops! Algo ha salido mal
            </div>
        }

        return this.props.children
    }
}

class App extends Component {

    componentDidCatch() {

    }

    render() {
        return (
            <div>
                <LimiteErrores>
                    <Boton/>
                </LimiteErrores>
            </div>
        )
    }
}

export default App