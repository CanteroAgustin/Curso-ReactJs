import React, { Component } from 'react';

const Eyes = () => (
    <span role='img' aria-label='eyes'>
        👀
    </span>

)

class InputNoControlado extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const nombre = event.target[0].value
        const email = event.target[1].value

        this.props.onSend({ nombre, email })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor='name'>Nombre: </label>
                        <input type='text' placeholder='Nombre' id='name'/>
                    </p>
                    <p>
                        <label htmlFor='email'>Email: </label>
                        <input type='text' placeholder='Email' id='email'/>
                    </p>
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}


class App extends Component {

    send = (data) => {
        console.log(data)
    }

    render() {
        return (
            <div>
                <h1>Inputs no controlados Ref <Eyes /></h1>
                <InputNoControlado onSend={this.send}></InputNoControlado>
            </div>
        )
    }
}




export default App