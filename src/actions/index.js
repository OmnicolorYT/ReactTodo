export const addTodo =() => {
    return {
        type: "ADD_TODO"
    }
}

export const removeTodo =(id) => {
    return {
        type: "REMOVE_TODO",
        payload: {id}
    }
}

export const editTodo =(id, text) => {
    return {
        type: "EDIT_TODO",
        payload: {id, text}
    }
}

export const changeComplete = (id) => {
    return {
        type: "CHANGE_COMPLETE",
        payload: {id}
    }
}

export const handleInputChange =(value) => {
    return {
        type: "HANDLE_INPUT_CHANGE",
        payload: { "text": value }
    }
}

export const switchSort = (value) => {
    return {
        type: "SWITCH_SORT",
        payload: { value }
    }
}

export const toggleAll = () => {
    return {
        type: "TOGGLE_ALL"
    }
}

export const edit = (id, text) => {
    return {
        type: "EDIT",
        payload: {id, text}
    }
}

export const clearDone = () => {
    return {
        type: "CLEAR_DONE"
    }
}

