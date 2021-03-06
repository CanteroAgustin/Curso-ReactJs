import React, { Component } from 'react';

const FancyInput = React.forwardRef((props, ref) => (
    <div>
        <input type="text" ref={ref} />

    </div>

))

class App extends Component {

    entrada = React.createRef()

    componentDidMount() {
        console.log(this.entrada)
    }

    render() {
        return (
            <div>
                <h1>Reenvio de refs 👀</h1>
                <FancyInput ref={this.entrada}></FancyInput>
            </div>
        )
    }
}




export default App