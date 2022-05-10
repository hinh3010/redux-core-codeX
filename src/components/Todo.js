import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Todo({ todos, addTodo, setTodos }) {
function Todo({ todos, addTodo, fetchTodos }) {
    const [text, setText] = useState('')

    // cách 1 gọi api trong components => cần hạn chế 
    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/todos')
    //         .then(res => setTodos(res.data))
    // }, [setTodos])

    // cách 2 gọi 1 action qua props 
    useEffect(() => {
        fetchTodos()
    }, [fetchTodos])

    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => {
                addTodo(text)
                setText('')
            }}>add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
