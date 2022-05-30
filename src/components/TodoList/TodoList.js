import React, {Component} from 'react'
import {connect} from 'react-redux'
import TodoItem from '../TodoItem/TodoItem'
import {bindActionCreators} from "redux";
import './TodoList.module.scss'

class TodoList extends Component {
    render() {
        return (
        <ul className="todolist">
            {
                this.props.todos.map ((todo) => {
                    return(
                        <TodoItem todo={todo} />
                    )
                })
            }
        </ul>
        )
    }
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

function mapStateToProps (state) {
    return {
        todos: getVisibleTodos(state.todos.todoList, state.ui.sort),
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({getVisibleTodos: getVisibleTodos}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TodoList)