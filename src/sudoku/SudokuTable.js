import React, { Component } from 'react'
import SudokuTableUI from './SudokuTableUI'

class SudokuTable extends Component {
    state = {
        counter: 1,
        cellIndexcellValueList: [],
        aliceState: {
            _00: 5,
            _01: 9,
            _02: 7,
            _10: 6,
            _11: 4,
            _12: 1,
            _20: 2,
            _21: 3,
            _22: 8,
        },
        bobState: {
            _00: 0,
            _01: 0,
            _02: 0,
            _10: 0,
            _11: 0,
            _12: 0,
            _20: 0,
            _21: 0,
            _22: 0,
        }
    }

    handleClick = (event, userName) => {
        const counter = this.state.counter
        if(counter >= 10) {
            return
        } else {
            event.target.value = counter
        }

        if(userName === 'bob') {
            const p = this.state.aliceState
            for (var key in p) {
                console.log(key + " -> " + p[key]);
                if(p[key] === counter) {
                    this.setState({
                        aliceState: {
                            ...this.state.aliceState,
                            [key]: 0
                        }
                    })
                }
                
            }
        }

        this.setState(prevState => {
            return ({
                counter: prevState.counter + 1
            })
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
            </div>
        )
    } 
}

export default SudokuTable