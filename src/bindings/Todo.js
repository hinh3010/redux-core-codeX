import { connect } from 'react-redux'
// import axios from "axios";

import Todo from '../components/Todo'
// import { addTodo, setTodos } from '../redux/todo'
import { addTodo, setTodos, fetchTodos } from '../redux/todo'

// lấy ra prop
const mapStateToProps = (state) => ({
    // console.log(state)
    todos: state.todo.items
    // tên props là todos
    // value lấy từ state có tên todo trong store.js 
    // từ todo lấy ra items của nó trong todoReducer
})

// gửi đi 1 action (đợi đc dispatch)
// cách 1
// const mapActionsToProps = {
//     addTodo: addTodo,
//     // tên props là addTodo  và tên actions là addTodo
//     setTodos
// }

// cách 2
const mapActionsToProps = dispatch => ({
    addTodo: text => dispatch(addTodo),
    setTodos: items => dispatch(setTodos),

    // action này sẽ gọi api và dispath 1 action khác
    // fetchTodos: async () => {
    //     const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    //     dispatch(setTodos(res.data))
    // }

    // cach 3
    fetchTodos: () => dispatch(fetchTodos()),

})


export default connect(mapStateToProps, mapActionsToProps)(Todo)

