import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {

  render() {
    let result
    if (this.props.isEditing) {
      result = (
        <li className='Todo-task'>
          <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
            <input
              type='text'
              value={this.props.task}
              name='task'
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </li>
      )
    } else {
      result = (
        <li className='Todo-task' onClick={() => this.props.toogleTodo(this.props.id)}>
          {this.props.task}
        </li>
      )
    }
    return (
      <div
        className={this.props.completed ? 'Todo completed' : 'Todo'}
      >
        {result}
        <div className='Todo-buttons'>
          <button onClick={() => this.props.makeEditable(this.props.id)}>
            <i className='fas fa-pen' />
          </button>
          <button onClick={() => this.props.deleteTodo(this.props.id)}>
            <i className='fas fa-trash' />
          </button>
        </div>
      </div>
    )
  }
}

export default Todo
