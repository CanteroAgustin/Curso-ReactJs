import React, { Component } from 'react';
import TarjetaFruta from './componentes/TarjetaFruta';

const styles = {
    height: '200px',
    background: 'gold',
    padding: '1em',
    boxSizing: 'border-box'
}

const Gato = (props) => (
    <div>
        <h1>Gato 🐅</h1>
        <pre>
            {JSON.stringify(props, null, 4)}
        </pre>
    </div>
)

class Contador extends Component {
    state = {
        clicks: 0,
        video: {
            title: 'Super Video',
            likes: 0
        }
    }

    add = () => {
        this.setState((state) => ({
            video: {
                ...state.video,
                likes: state.video.likes + 1
            }
        }))
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.video.title}
                </h1>
                <button onClick={this.add}>
                    likes: ({this.state.video.likes})
                 </button>
            </div>
        )
    }
}

class App extends Component {

    // state = {
    //     fuerza: 100,
    //     vidasRestantes: 7
    // }

    state = {
        x: 0,
        y: 0
    }

    manejador = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render() {
        const otrosDatos = {
            raza: 'tropical',
            peleasNocturnas: 300
        }

        return (
            <div>
                <div
                    style={styles}
                    onMouseMove={this.manejador}>
                    <div>
                        x: {this.state.x}
                    </div>
                    <div>
                        y: {this.state.y}
                    </div>
                </div>
                <Gato
                    name='Garfield'
                    age='2 anos'
                    {...otrosDatos}
                // {...this.state} 
                />
                <Contador />
                <TarjetaFruta name="Sandia" price={3.00} />
                <TarjetaFruta name="Naranja" price={2.00} />
                <TarjetaFruta name="Kiwi" price={4.00} />
            </div>
        )
    }
}


export default App