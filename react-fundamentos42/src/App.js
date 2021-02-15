import React, { Component } from 'react';
import PubSub from 'pubsub-js'

const Header = () => {

    const subtitleStyle = {
        fontWeight: 'bold'
    }

    const headerStyles = {
        margin: '0.6em',
        borderRadius: '0.3em',
        border: '1px solid #d2d2d2',
        padding: '2em 0.4em',
        fontFamily: 'monospace',
        fontSize: '17px',
        textAlign: 'center',

    }
    return (

        <header style={headerStyles}>
            <div>( Cualquiera ) </div>
            <div style={subtitleStyle}>
                Observer Pattern
                <span role='img' aria-label='flame'>
                    🔥
                </span>
            </div>
        </header>
    )

}

const boxStyles = {
    padding: '0.5em',
    margin: '0.5em',
    border: '1px solid gray',
    borderRadius: '0.3em',
    textAlign: 'center'
}

class Hijo extends Component {
    render() {
        return (
            <div
                style={boxStyles}>
                <Nieto />
            </div>
        )
    }
}

class Nieto extends Component {
    render() {
        return (
            <div
                style={boxStyles} >
                <BisNieto />
            </div>
        )
    }
}

class BisNieto extends Component {

    state = {
        message: '********'
    }

    componentDidMount() {
        PubSub.subscribe('otro evento', (e, data) => {
            this.setState({
                message: data.title
            })
        })
    }

    handleClick = () => {
        PubSub.publish('saludo', 'Hola desde el BisNieto')
    }

    render() {
        return (
            <div
                style={boxStyles} >
                <p>{this.state.message}</p>
                <button onClick={this.handleClick}>NIETO</button>
            </div>
        )
    }
}

class App extends Component {

    componentDidMount() {
        PubSub.subscribe('saludo', (e, data) => {
            alert(data)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe('otro evento')
    }

    handleClick = () => {
        PubSub.publish('otro evento',
            { title: 'Hola desde <App />' }
        )
    }

    render() {
        return (
            <div
                style={boxStyles}>
                <button onClick={this.handleClick}> PADRE</button>
                <Header />
                <Hijo />
            </div>
        )
    }
}

export default App