import initialState from './initialState'

export default function contactReducers(state = initialState.todos, action) {
    switch(action.type) {
        case "ADD_TODO":
            if (state.todoList.length !== 0) {
                state.newTodo.id = state.todoList[state.todoList.length - 1].id + 1
            }
            else {
                state.newTodo.id = 0
            }
            if (state.newTodo.text.length !== 0 && !!state.newTodo.text.trim()) {
                return {
                    ...state,
                    todoList: [...state.todoList, state.newTodo],
                    newTodo: {id: '', text: '', complete: false}
                }
            }
            else {
                return{
                    ...state
                }
        }
        case "REMOVE_TODO":
            let newTodoList = [...state.todoList].filter(item => item.id !== action.payload.id)
            return {
                ...state,
                todoList: newTodoList
            }
        case "EDIT_TODO":
            let editTodo = [...state.todoList].filter(item => {
                if (item.id === action.payload.id) {
                    item.text = action.payload.text
                }
                return item
            })
            return {
                ...state, todoList: editTodo
            }
        case "CHANGE_COMPLETE":
            let completeTodo = [...state.todoList].filter(item => {
                if (item.id === action.payload.id) {
                    item.complete = !item.complete
                }
                return item
            })
            return {
                ...state, todoList: completeTodo
            }
        case "HANDLE_INPUT_CHANGE":
            return {
                ...state,
                newTodo: {
                    ...state.newTodo, ...action.payload
                }
            }
        case "TOGGLE_ALL":
            let complete = false
            for (let item of state.todoList) {
                if (item.complete === false) {
                    complete = true
                }
            }
            let toggleTodo = [...state.todoList].filter(item => {
                item.complete = complete
                return item
            })
            return {
                ...state,
                todoList: toggleTodo
            }
        case "CLEAR_DONE":
            let clearDone = [...state.todoList].filter(item => !item.complete)
            return {
                ...state,
                todoList: clearDone
            }
        default:
            return state;
    }
}