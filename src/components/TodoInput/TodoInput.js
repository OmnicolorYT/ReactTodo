import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {addTodo, toggleAll, handleInputChange} from "../../actions";
import './TodoInput.module.scss'

class TodoInput extends Component {
    render() {
        return (
            <div className="input">
                <input className="toggle-all" type="checkbox" onClick={() => this.props.toggleAll()}/>
                <input className="new-todo"
                       type="text"
                       placeholder="Что нужно сделать?"
                       autoFocus
                       value={this.props.newTodo.text}
                       onKeyDown={(ev) => {
                           if (ev.keyCode === 13) {
                               this.props.addTodo()
                           }
                       }}
                       onChange={(e)=>{this.props.handleInputChange(e.target.value)}}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        todos: state.todos.todoList,
        newTodo: state.todos.newTodo
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({addTodo: addTodo, toggleAll: toggleAll, handleInputChange: handleInputChange}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TodoInput)