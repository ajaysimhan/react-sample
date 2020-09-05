import React, { Component } from 'react'
import Login from './Login'
import SnakeMain from './SnakeMain'

class SnakeOrigin extends Component {
    state = {
        loggedIn: false
    }

    componentDidMount() {
        fetch('http://localhost:8080/init')
        .then(response => response.json())
        .then(data => {
            this.setState(data)
        })
        console.log('componet  mount')
    }

    handleClick = (e, userName) => {
        e.preventDefault()
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: userName
            })
        })
        .then(response => response.json())
        .then(data => {
            this.setState(data)
        })
    }

    render() {
        if(!this.state.loggedIn) {
            return(
                <div>
                    <Login handleClick={this.handleClick}/>
                </div>
            )   
        } else {
            return(
                <div>
                    <SnakeMain />
                </div>
            )
        }
        
        
    }
}

export default SnakeOrigin