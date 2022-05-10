import { createStore, combineReducers, applyMiddleware } from 'redux'
import todoReducer from './todo'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    todo: todoReducer
})

/* viết tường minh
const  myMiddleware = (store) => {
    return function (next) {
        return function (action) {
            return next(action)
        }
    }
}
*/

// viết ngắn hơn
const myMiddleware = store => next => action => {
    // console.log({ store }) // là 1 đối tượng có 2 method : setState() , dispatch()
    // console.log({ next }) // là 1 function dispatch() 1 action
    // console.log({ action }) // là 1 action creator
    return next(action)
}

// cách 3
const asyncMiddleware = store => next => action => {
    // console.log({ action }) 
    if (typeof action === 'function') {
        // nếu kiểu của action là 1 hàm thì . truyền cho nó next làm đối số
        return action(next)      // mà next là 1 dispatch => dispatch làm đối số
    }
    return next(action)
}

export default createStore(reducer, applyMiddleware(myMiddleware, asyncMiddleware))