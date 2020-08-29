import React, { Component } from 'react';

import Todo from './Todo';

class TodoMain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems: [
        {
          id: 1,
          description: 'Wake up',
          isCompleted: false
        },
        {
          id: 2,
          description: 'Take bath',
          isCompleted: false
        },
        {
          id: 3,
          description: 'Exercise',
          isCompleted: true
        }
      ]
    }
    //this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (id) => {
    console.log(id)
    this.setState(prevState => {
      const newState = prevState.todoItems.map(item => {
        
        if(item.id === id) {
          console.log('Before', item)
          item.isCompleted = !item.isCompleted
          console.log('After', item)
        } 
        
        return item
      })
      return {
        todoItems: newState
      }
    })
  }    

  render() {
    console.log(this.state.todoItems)
    const todoList = this.state.todoItems.map(todoItem => {
      return (
        <Todo key={todoItem.id} todoItem={todoItem} handleClick={(id) => {this.handleClick(id)}}/>
      )
    })
    
    return (
      <div>
        {todoList}
      </div>
    )
  }
}

export default TodoMain