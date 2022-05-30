import React, { Component} from 'react'
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import Footer from "../Footer/Footer";
import './MainTodo.module.scss'

class MainTodo extends Component{
    render() {
        return (
            <section className='todo'>
                <TodoInput/>
                <TodoList/>
                <Footer/>
            </section>
        )
    }
}

export default MainTodo