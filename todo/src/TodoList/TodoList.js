import React, { Component } from 'react'
import Todo from '../Todo/Todo'
import NewTodoForm from '../NewTodoForm/NewTodoForm'
import './TodoList.css'
import uuid from 'uuid'

export default class TodoList extends Component {
  state = {
    todos: [
      {
        "id": uuid.v4(),
        "title": "delectus aut autem",
        "completed": false,
        "isEditing": false
      },
      {
        "id": uuid.v4(),
        "title": "quis ut nam facilis et officia qui",
        "completed": false,
        "isEditing": false
      },
      {
        "id": uuid.v4(),
        "title": "fugiat veniam minus",
        "completed": false,
        "isEditing": false
      }
    ]
  }

  handleAddTodo = (todo) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          "id": uuid.v4(),
          "title": todo,
          "completed": false,
          "isEditing": false
        }
      ]
    })
  }

  handleDeleteTodo = (id) => {
    let newTodos = [...this.state.todos]

    newTodos = newTodos.filter(todo => todo.id !== id)

    this.setState({ todos: newTodos })
  }

  updateTodo = (id, updatedTodo) => {
    let newTodos = [...this.state.todos]

    newTodos = newTodos.map(todo => {
      let newTodo = todo
      if (todo.id === id) {
        newTodo.title = updatedTodo
        newTodo.isEditing = false
      }
      return newTodo
    })

    this.setState({ todos: newTodos })
    console.log(newTodos)
    console.log(this.state.todos)
  }

  render() {
    return (
      <div className="TodoList">
        <header>
          <h1>
            Todo List! <span>A Simple React Todo List App!</span>
          </h1>
        </header>
        <NewTodoForm addTodo={this.handleAddTodo} />
        <ul>
          <div className='todo-list'>
            {this.state.todos.map(todo => {
              return (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  task={todo.title}
                  isEditing={todo.isEditing}
                  completed={todo.completed}
                  deleteTodo={this.handleDeleteTodo}
                  updateTodo={this.updateTodo}
                />
              )
            })}
          </div>
        </ul>
      </div>
    )
  }
}
