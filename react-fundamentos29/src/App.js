import React, { Component } from 'react';
import axios from 'axios'

//e395f204
class App extends Component {

    state = {
        movie: {},
        isFetching: false
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({ isFetching: true })

        const title = event.target[0].value
        const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=e395f204'

        axios.get(url,
            {
                params: {
                    t: title
                }
            })
            .then(res => this.setState({ movie: res.data, isFetching: false }))
    }

    render() {

        const { movie, isFetching } = this.state

        return (
            <div>
                <h1>Ejemplo HTTP Buscador de Peliculas</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        placeholder='Nombre de Pelicula' />
                    <button>
                        Buscar
                    </button>
                </form>
                { isFetching && (
                    <h2>Cargando...</h2>
                )

                }
                {movie.Title && !isFetching && (
                    <div>
                        <h1>{movie.Title}</h1>
                        <p>{movie.Plot}</p>
                        <img
                            style={{
                                width: '150px'
                            }}
                            src={movie.Poster}
                            alt='Poster' />
                    </div>)}
            </div>
        )
    }
}




export default App