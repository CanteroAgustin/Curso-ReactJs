import React, { Component } from 'react';




class App extends Component {

    const users = {
        user: {
            name: 'Agustin Cantero',
            country: 'Argentina',
            twiter: '@luxfenix',
            youtube: 'tecs.ninja'
        }
    }
    
    render() {
        return (
            <div>
                <h1>Iterando</h1>
                <ul>
                    {users.map(user)=>(
                        <li>
                            {user.name}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}




export default App