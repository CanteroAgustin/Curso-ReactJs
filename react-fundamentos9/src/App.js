import React, { Component } from 'react';

class portal extends Component {

    render() {
        return ReactDOM.createPortal((
            <div>
                <h1>Portal</h1>
            </div>
        ))
    }
}



class App extends Component {

    render() {
        return (
            <div>
                <h1>Ninja PRO</h1>
            </div>
        )
    }
}




export default App