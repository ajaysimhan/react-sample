import React, { Component } from 'react'

class Login extends Component {
    state = {
        userName: ''
    }

    handleInputChange = (e) => {
        this.setState({
            userName: e.target.value
        })
    }

    render() {
        return(
            <div>
                <form>
                    <label>Username: </label>
                    <input type="text" onChange={this.handleInputChange} />
                    <button onClick={(e) => this.props.handleClick(e, this.state.userName)}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login