import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {switchSort, clearDone} from "../../actions";
import styles from './Footer.module.scss'
import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import activeTodosCounter from "../../utils/activeTodosCounter";

function Footer() {
    const todos = useSelector(state => state.todos.todoList)
    const sort = useSelector(state => state.ui.sort)
    const dispatch = useDispatch()
    const cx = classNames.bind(styles)
    const [pluralizedCountStr, setPluralizedCountStr] = useState('')

    useEffect(() => {
        setPluralizedCountStr(activeTodosCounter(todos))
    }, [todos])


    return (
        <div className={styles.footer}>
            <p className={styles.counter}>{pluralizedCountStr}</p>
            <div className={styles.buttons}>
                <p className={styles.sort_button + " " + cx({checked: sort === 'ALL'})} onClick={() => dispatch(switchSort('ALL'))}>Все</p>
                <p className={styles.sort_button + " " + cx({checked: sort === 'ACTIVE'})} onClick={() => dispatch(switchSort('ACTIVE'))}>Активные</p>
                <p className={styles.sort_button + " " + cx({checked: sort === 'DONE'})} onClick={() => dispatch(switchSort('DONE'))}>Выполненные</p>
            </div>
            <p className={styles.clear_all_button} onClick={() => dispatch(clearDone())}>Очистить выполненные</p>
        </div>
    )
}

Footer.propTypes = {
    todos: PropTypes.number,
    sort: PropTypes.string
}

export default Footer