import React, { Component } from 'react'
import SudokuTableUI from './SudokuTableUI'

class SudokuTable extends Component {
    state = {
        counter: 1,
        aliceState: {
            _00: '',
            _01: '',
            _02: '',
            _10: '',
            _11: '',
            _12: '',
            _20: '',
            _21: '',
            _22: '',
        },
        bobState: {
            _00: '',
            _01: '',
            _02: '',
            _10: '',
            _11: '',
            _12: '',
            _20: '',
            _21: '',
            _22: '',
        },
        markState: {
            _00: '',
            _01: '',
            _02: '',
            _10: '',
            _11: '',
            _12: '',
            _20: '',
            _21: '',
            
            _22: '',
        }
    }

    componentDidMount() {
        //this.timer = setInterval(()=> this.getItems(), 1000);
    }

    getItems() {
        fetch('http://localhost:8080/get')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                aliceState: data.aliceState,
                bobState: data.bobState,
                markState: data.bobState
            })
        })
    }

    handleClick = (event, userName, index) => {
        const currCounter = this.state.counter
        if(currCounter >= 10) {
            return
        }

        if(userName === 'alice') {
            this.setState(prevState => {
                return ({
                    counter: prevState.counter + 1,
                    aliceState: {
                        ...prevState.aliceState,
                        [index]: currCounter
                    }
                })
            })
        }
        if(userName === 'bob') {
            this.setState(prevState => {
                return ({
                    counter: prevState.counter + 1,
                    bobState: {
                        ...prevState.bobState,
                        [index]: currCounter
                    }
                })
            })
        }
        const body = {
            userName: userName,
            index: index,
            value: currCounter
        }
        fetch('http://localhost:8080/update', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
    }
    

    render() {
        return (
            <div>
                <h1>Alice</h1>
                <SudokuTableUI handleClick={this.handleClick} userName="alice" myState={this.state.aliceState} />
                <hr />
                <h1>Bob</h1>
                <SudokuTableUI handleClick={this.handleClick} userName="bob" myState={this.state.bobState}  />
                <hr />
                <h1>Mark</h1>
                <SudokuTableUI handleClick={this.handleClick} userName="mark" myState={this.state.markState}  />
            </div>
        )
    } 
}

export default SudokuTable