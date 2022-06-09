import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {switchSort, clearDone} from "../../actions";
import styles from './Footer.module.scss'
import classNames from "classnames/bind";
import PropTypes from 'prop-types';

function Footer() {
    const todos = useSelector(state => state.todos.todoList)
    const sort = useSelector(state => state.ui.sort)
    const dispatch = useDispatch()
    const cx = classNames.bind(styles)
    const [count, setCount] = useState(0)
    const [str, setStr] = useState('')

    useEffect(() => {
        let num = 0
        if (todos !== null) {
            for (let item of todos) {
                if (!item.complete) {
                    num += 1
                }
            }
        }
        setCount(num)
    }, [todos])

    useEffect(() => {
        if (count % 10 === 1 && count % 100 !== 11) {
            setStr(" задание осталось")
        }
        else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 12 || count % 100 > 14)) {
            setStr(" задания осталось")
        }
        else {
            setStr(" заданий осталось")
        }
    }, [count])


    return (
        <div className={styles.footer}>
            <p className="counter">{count + str}</p>
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