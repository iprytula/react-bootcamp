import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {

  state = {
    isEditing: this.props.isEditing,
    task: this.props.task,
    completed: false
  }

  handleToogleTodo = () => {
    this.setState({ completed: !this.state.completed })
  }

  toogleForm = () => {
    this.setState({isEditing: !this.state.isEditing})
  }

  handleUpdate = (ev) => {
    ev.preventDefault()

    this.props.updateTodo(this.props.id, this.state.task)
    this.setState({isEditing: false})
  }

  handleChange = (ev) => {
    this.setState({[ev.target.name]: ev.target.value})
  }

  render() {
    let result
    if (this.state.isEditing) {
      result = (
        <li className='Todo-task'>
          <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
            <input
              type='text'
              value={this.state.task}
              name='task'
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </li>
      )
    } else {
      result = (
        <li className='Todo-task' onClick={this.handleToogleTodo}>
          {this.props.task}
        </li>
      )
    }
    return (
      <div
        className={this.state.completed ? 'Todo completed' : 'Todo'}
      >
        {result}
        <div className='Todo-buttons'>
          <button onClick={this.toogleForm}>
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
