import React, { Component } from 'react';

class Contador extends Component {

    constructor(props) {
        super(props)
    }

    title = React.createRef()
    state = {
        num: this.props.num
    }

    agregar = () => {
        this.setState(state => ({
            num: this.state.num + 1
        }))
    }

    render() {

        return (
            <div>
                <h2
                    ref={this.title}
                >{this.state.message}</h2>
                <button onClick={this.agregar}>
                    Click ( {this.state.num})
                </button>
            </div>
        )
    }
}

class App extends Component {

    render() {

        return (
            <div>
                <h1>Metodo constructor</h1>
                <Contador num={1200}></Contador>
            </div>
        )
    }
}




export default App