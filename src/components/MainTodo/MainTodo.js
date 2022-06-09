import React from 'react'
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import Footer from "../Footer/Footer";
import styles from './MainTodo.module.scss'

function MainTodo() {
    return (
        <section className={styles.todo}>
            <TodoInput/>
            <TodoList/>
            <Footer/>
        </section>
    )
}

export default MainTodo