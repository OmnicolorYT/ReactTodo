import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {removeTodo, editTodo, changeComplete, edit} from "../../actions";
import styles from './TodoItem.module.scss'
import PropTypes from 'prop-types';
import classNames from "classnames/bind";

function TodoItem(props) {
    const todo = props.todo
    const ui = useSelector(state => state.ui)
    const dispatch = useDispatch()
    const cx = classNames.bind(styles)

    function onEnterKey(e) {
        const ENTER_KEY_CODE = 13
        if (e.keyCode === ENTER_KEY_CODE)
        {
            dispatch(editTodo(ui.editId, ui.editText))
            dispatch(edit('',''))
        }
    }

    function itemTextField() {
        if (todo.id === ui.editId) {
            return(<input
                className={styles.edit}
                type="text"
                value={ui.editText}
                onChange={(e) => dispatch(edit(todo.id, e.target.value))}
                onBlur={() => dispatch(edit('', ''))}
                onKeyDown={(e) => onEnterKey(e)}
                autoFocus
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

    return(
        <li>
            <div className={styles.item + " " + cx({done: todo.complete})}>
                <input className={styles.toggle} type="checkbox" onClick={() => dispatch(changeComplete(todo.id))}/>
                {itemTextField()}
            </div>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        complete: PropTypes.bool
    })
}

export default TodoItem