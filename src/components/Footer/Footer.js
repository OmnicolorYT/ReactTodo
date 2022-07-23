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
                <a className={cx({checked: sort === 'ALL'})} onClick={() => dispatch(switchSort('ALL'))} href='#'>Все</a>
                <a className={cx({checked: sort === 'ACTIVE'})} onClick={() => dispatch(switchSort('ACTIVE'))} href='#'>Активные</a>
                <a className={cx({checked: sort === 'DONE'})} onClick={() => dispatch(switchSort('DONE'))} href='#'>Выполненные</a>
            </div>
            <a onClick={() => dispatch(clearDone())}>Очистить выполненные</a>
        </div>
    )
}

Footer.propTypes = {
    todos: PropTypes.number,
    sort: PropTypes.string
}

export default Footer