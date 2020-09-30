import React, { Component } from 'react';
import Todos from './todos'
import Title from './title';
import Description from './description'
import AddTodos from './addTodos';




export default class App extends Component {
  state = {
    'app_name': 'My awesome todo list',

    'todos': [
      { 'name': 'Walk the dog', 'id': 0, 'due_date': '10/30/2020' },
      { 'name': 'Make coffee', 'id': 1, 'due_date': '11/20/2020' },
      { 'name': 'Work on learning React', 'id': 2, 'due_date': '12/05/2020' }
    ]
  }
  deleteTodos = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })
    this.setState({
      todos: todos
    })
  }
  
  addTodos=(newTodo)=>{
    newTodo.id=this.state.todos[this.state.todos.length-1].id+1;
    let todos=[...this.state.todos,newTodo]
    this.setState({
      todos
   })
  }

  render(){

    return (
      <div>

        <Title name="Scott" age="33"></Title>
        <Description car="Hyundai Kona"></Description>
        <AddTodos addTodos={this.addTodos}></AddTodos>
        <Todos deleteTodos={this.deleteTodos} todos={this.state.todos}></Todos>
      </div>
    )
  }
}


