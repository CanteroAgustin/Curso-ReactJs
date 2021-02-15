import React, { Component } from 'react';


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
            <div>(Hermanos ) </div>
            <div style={subtitleStyle}>
                Parent Component
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

const blueStyles = {
    ...boxStyles,
    border: '1px solid blue'
}

const redStyles = {
    ...boxStyles,
    border: '1px solid red'
}

class ComponentA extends Component {

    onAdd = () => {

    }

    render() {

        const { num } = this.props
        return (

            <div
                style={blueStyles}>
                <button onClick={this.props.onAdd}>
                    Component A ({num})
                    </button>
            </div>
        )
    }
}

class ComponentB extends Component {

    onAdd = () => {

    }

    render() {
        const { num } = this.props
        return (

            <div
                style={redStyles}>
                <button onClick={this.props.onAdd}>
                    Component B ({num})
                    </button>
            </div>
        )
    }
}

class App extends Component {

    state = {
        countA: 0,
        countB: 0
    }

    handleA = (e) => {
        this.setState(state => ({ countA: state.countA + 1 }))
    }

    handleB = (e) => {
        this.setState(state => ({ countB: state.countB + 2 }))
    }

    render() {

        const { countA, countB } = this.state

        return (

            <div
                style={boxStyles}>
                <Header />
                <ComponentA num={countA} onAdd={this.handleB} />
                <ComponentB num={countB} onAdd={this.handleA} />
            </div>
        )
    }
}

export default App