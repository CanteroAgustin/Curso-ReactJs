import React, { Component } from 'react';

const users = [ 
        { id:1, name: 'Agustin Cantero', country: 'Argentina' }, 
        { id:2, name: 'Gerardo Gallegos', country: 'USA' }, 
        { id:3, name: 'Erwin Howell', country: 'Colombia' }, 
        { id:4, name: 'Rodrigo Fernandez', country: 'Peru' }, 
        { id:5, name: 'Alfredo Bauch', country: 'Guatemala' }, 
        { id:6, name: 'Fernanda Valencia', country: 'Espana' }, 
]

class App extends Component {

    render() {
        return (
            <div>
                <h1>Iterando</h1>
                <ul>
                    {users.map((user)=>(
                        <li key={user.id}>
                        {user.name}
                    </li>
                    ))}
                </ul>
            </div>
        )
    }
}




export default App