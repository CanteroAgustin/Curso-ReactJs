import React, { Component } from 'react';




class App extends Component {

    state = {
        user: {
            name: 'Agustin Cantero',
            country: 'Argentina',
            twiter: '@luxfenix',
            youtube: 'tecs.ninja'
        }
    }

    render() {
        const {user} = this.state
        const keys = Object.keys(user)
        return (
            <div>
                <h3>iterando propiedades de objetos</h3>
                <ul>
                    {keys.map(key=> (
                        <li>
                            <strong>{key}:</strong> {user[key]}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}




export default App