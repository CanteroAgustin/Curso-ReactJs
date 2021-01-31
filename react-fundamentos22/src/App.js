import React, { Component } from 'react';

const Eyes = () => (
    <span role='img' aria-label='eyes'>
        👀
    </span>

)

class InputControlado extends Component {

    state = {
        text: '',
        tieneError: false,
        color: '#E8E8E8'
    }

    actualizar = (event) => {
        const text = event.target.value
        let color = 'green'

        if (text.trim() === '') {
            color = '#E8E8E8'
        }
        if (text.trim() !== '' && text.trim().length < 5) {
            color = 'red'
        }

        this.setState({ text, color })
    }

    render() {
        const styles = {
            border: `1px solid ${this.state.color}`,
            padding: '0.3em 0.6em',
            outline: 'none'
        }

        return (
            <div>
                <input
                    type='text'
                    value={this.state.text}
                    onChange={this.actualizar}
                    style={styles}
                />
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
                <h1>Inputs controlados <Eyes /></h1>
                <InputControlado></InputControlado>
            </div>
        )
    }
}




export default App