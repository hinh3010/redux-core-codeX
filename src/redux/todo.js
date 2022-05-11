import axios from "axios";

const initialState = {
    items: [],
}

const ADD_TODO = 'ADD_TODO'
const SET_TODOS = 'SET_TODOS'
const FETCH_TODOS = 'FETCH_TODOS'

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload: payload
})

export const setTodos = (payload) => ({
    type: SET_TODOS,
    payload: payload
})

// cách 3 + 4 tuy nhiên action creator chỉ return 1 {}
// => cần middleware để nó return 1 hàm => store.js
export const fetchTodos = () => async (dispatch) => {
    console.log(dispatch)
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    dispatch(setTodos(res.data))
}

const reducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                items: action.payload
            }
        case SET_TODOS:
            // console.log(action.payload)
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default reducer