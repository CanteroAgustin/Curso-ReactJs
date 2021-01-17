import React, { Component } from 'react';
import TarjetaFruta from './componentes/TarjetaFruta';

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

const App = () => (
    <div>
        <Contador></Contador>
        {/* <TarjetaFruta name="Sandia" price={3.00} />
        <TarjetaFruta name="Naranja" price={2.00} />
        <TarjetaFruta name="Kiwi" price={4.00} /> */}
    </div>
)

export default App