import { createStore } from 'redux';

const todo = createStore(reducer, {
    todos: {
        todolist: [],
        newTodo: {
            id: '',
            text: '',
            state: ''
        }
    },
    ui: {
        sort: 'SHOW_ALL'
    }
});

function reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":

            break;
        case "REMOVE_TODO" :
            break;
        case "EDIT_TODO":
            break;
        case "HANDLE_INPUT_CHANGE":
            break;
    }
}

export default todo;

export const addTodo =() => {
    return {
        type: "ADD_TODO"
    }
}

export const removeTodo =(id) => {
    return {
        type: "REMOVE_TODO",
        payload: { id }
    }
}

export const editTodo =(name, value) => {
    return {
        type: "EDIT_TODO",
        payload: { [name]: value }
    }
}

export const handleInputChange =(name, value) => {
    return {
        type: "HANDLE_INPUT_CHANGE",
        payload: { [name]: value }
    }
}