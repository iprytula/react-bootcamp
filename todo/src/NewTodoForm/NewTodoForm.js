import React, { Component } from 'react'
import './NewTodoForm.css'

class NewTodoForm extends Component {
  state = {
    todo: ''
  }

  handleChange = (evt) => {
    this.setState({
      todo: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    if (this.state.todo.length > 0) {
      this.props.addTodo(this.state.todo)

      this.setState({todo: ''})
    }
  }

  render() {
    return (
      <form className='NewTodoForm' onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='New Todo'
          id='task'
          name='task'
          value={this.state.todo}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default NewTodoForm