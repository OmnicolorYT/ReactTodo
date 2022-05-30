const initialState = {
    todos: {
        todoList: [{id: 0, text: "Напиши первое задание и постарайся его выполнить", complete: false}],
        newTodo: {
            id: '',
            text: '',
            complete: false,
        }
    },
    ui: {
        sort: 'ALL',
        editId: '',
        editText: ''
    }
}

export default initialState;