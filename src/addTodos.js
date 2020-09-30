
import React, { Component } from 'react';

export default class AddTodos extends Component{

      
    state = {
        'name': null
    }
    handleChange = (e) => {
        this.setState({
            ['name']: e.target.value
        })
        console.log(this.state);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
       this.props.addTodos(this.state);
       document.querySelector('form').reset();
   }

        render(){
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="item"></label>
                        <input onChange={this.handleChange} type='text' placeholder='Add a todo…' id='item'/>
                        <button className="btn btn-add">Add</button>
                    </form>
                </div>
            )
        }
    }
