import React from 'react'
import {useSelector} from 'react-redux'
import TodoItem from '../TodoItem/TodoItem'
import styles from './TodoList.module.scss'

function TodoList() {
    const todos = useSelector(state => getVisibleTodos(state.todos.todoList, state.ui.sort))
    const todosList = todos.map ((todo) => {
        return(
            <TodoItem todo={todo} key={todo.id}/>
        )
    })

    return (
        <ul className={styles.todoList}>
            {todosList}
        </ul>
    )
}

function getVisibleTodos (todos, filter) {
    switch (filter) {
        case "ALL":
        default:
            return todos
        case "DONE":
            return todos.filter(item => item.complete)
        case "ACTIVE":
            return todos.filter(item => !item.complete)
    }
}


export default TodoList