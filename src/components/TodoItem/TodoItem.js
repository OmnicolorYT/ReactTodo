import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {removeTodo, editTodo, changeComplete, edit} from "../../actions";
import styles from './TodoItem.module.scss'
import PropTypes from 'prop-types';

function TodoItem(props) {
    const todo = props.todo
    const ui = useSelector(state => state.ui)
    const todos = useSelector(state => state.todos.todoList)
    const dispatch = useDispatch()

    function onEnterKey(e) {
        if (e.keyCode === 13)
        {
            dispatch(editTodo(ui.editId, ui.editText))
            dispatch(edit('',''))
        }
    }

    function renderBlock() {
        if (todo.id === ui.editId) {
            return(<input
                className={styles.edit}
                type="text"
                value={ui.editText}
                onChange={(e) => dispatch(edit(todo.id, e.target.value))}
                onBlur={() => dispatch(edit('', ''))}
                onKeyDown={(e) => onEnterKey(e)}
                autoFocus={true}
            />)
        }
        else {
            return(
                <div>
                    <p onClick={() => dispatch(edit(todo.id, todo.text))}>{todo.text}</p>
                    <button className={styles.destroy} onClick={() => dispatch(removeTodo(todo.id))}/>
                </div>
            )
        }
    }

    function getStateStyle() {
        for (let item of todos) {
            if (item.id === todo.id) {
                if (item.complete) {
                    return(" " + styles.done)
                }
                else {
                    return("")
                }
            }
        }
    }

    return(
        <li>
            <div className={styles.item + getStateStyle()}>
                <input className={styles.toggle} type="checkbox" onClick={() => dispatch(changeComplete(todo.id))}/>
                {renderBlock()}
            </div>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object
}

export default TodoItem