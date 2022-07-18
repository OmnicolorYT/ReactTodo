import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, toggleAll, handleInputChange} from "../../actions";
import styles from './TodoInput.module.scss'

function TodoInput() {
    const newTodo = useSelector(state => state.todos.newTodo)
    const dispatch = useDispatch()

    function addKeyDown(ev) {
        const ENTER_KEY_CODE = 13
        if (ev.keyCode === ENTER_KEY_CODE) {
            dispatch(addTodo())
        }
    }

    return (
        <div className={styles.input}>
            <input className={styles.toggleAll} type="checkbox" onClick={() => dispatch(toggleAll())}/>
            <input className={styles.newTodo}
                   type="text"
                   placeholder="Что нужно сделать?"
                   autoFocus
                   value={newTodo.text}
                   onKeyDown={(ev) => addKeyDown(ev)}
                   onChange={(e)=>{dispatch(handleInputChange(e.target.value))}}/>
        </div>
    )
}


export default TodoInput