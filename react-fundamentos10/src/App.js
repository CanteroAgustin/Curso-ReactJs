import React, { Component } from 'react';
import PropTypes from 'prop-types'

const noop = () => { }

class Profile extends Component {

    static propTypes = {
        name: PropTypes.string,
        bio: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number
    }

    static defaultProps = {
        name: "Agustin721",
        onHello: noop
    }

    saluda = () => {
        this.props.onHello()
    }

    render() {
        const { name, bio, email } = this.props



        return (
            <div>
                <h1>{name}</h1>
                <p>
                    {bio}
                </p>
                <a href={`mailto:${email}`}>
                    {email}
                </a>
                <button onClick={this.saluda}> Saluda</button>
            </div>
        )
    }
}

class App extends Component {

    render() {
        return (
            <div>
                <Profile
                    bio="Soy dev Java"
                    email='agustin@gmail.com'
                />
            </div>
        )
    }
}




export default App