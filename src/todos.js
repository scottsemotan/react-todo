import React from 'react';

// 1. Define an arrow function
const Todos = ({ deleteTodos, todos }) => {
    // 2. Make an empty array called todoItems
    const todoItems = [];

    // 3. iterate over the todos array
    todos.forEach(todo => {
        //4. On each todo element
        //push HTML into the array
        todoItems.push(
            <div key={todo.id}>
                <li style={styleList}>{todo.name} - By {todo.due_date} <button onClick={()=>{deleteTodos(todo.id)}} style={styleButton} className="btn btn-delete">Delete From List</button>
                </li>
            </div>
        )
    });
    //5. Using JSX, return the items pushed to the todoItems
    // instead html
    return (
        <div className="list-container">
            <ul className="list">
                {todoItems}
            </ul>
        </div>
    )
}
const styleList = {
    color: 'Red',

};
const styleButton = {
    color: 'Purple',
    background: 'lightblue'
};


//6. Export the Todos function
export default Todos;