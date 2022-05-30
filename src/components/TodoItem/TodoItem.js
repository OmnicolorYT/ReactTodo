import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {removeTodo, editTodo, changeComplete, handleInputChange, edit} from "../../actions";
import './TodoItem.scss'

class TodoItem extends Component {

    render() {
        let state = ""
        for (let item of this.props.todos) {
            if (item.id === this.props.todo.id) {
                if (item.complete) {
                    state = "done"
                }
                else {
                    state = ""
                }
            }
        }
        return(
            <li key={this.props.todo.id}>
                <div className={'item {state}'.replace('{state}', state)}>
                    <input className="toggle" type="checkbox" onClick={() => this.props.changeComplete(this.props.todo.id)}/>
                    {this.props.todo.id === this.props.ui.editId ?
                        <input
                            className={"edit"}
                            type="text"
                            value={this.props.ui.editText}
                            onChange={(e) => this.props.edit(this.props.todo.id, e.target.value)}
                            onBlur={() => this.props.edit('', '')}
                            onKeyDown={(e) => {
                                if (e.keyCode === 13)
                                {
                                    this.props.editTodo(this.props.ui.editId, this.props.ui.editText);
                                    this.props.edit('','')
                                }
                            }}
                            autoFocus={true}
                        /> :
                        <div>
                            <p onClick={() => this.props.edit(this.props.todo.id, this.props.todo.text)}>{this.props.todo.text}</p>
                            <button className={"destroy"} onClick={() => this.props.removeTodo(this.props.todo.id)}/>
                        </div>
                    }
                </div>
            </li>
        )
    }
}

function mapStateToProps (state) {
    return {
        todos: state.todos.todoList,
        ui: state.ui
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({removeTodo: removeTodo, editTodo: editTodo, changeComplete: changeComplete, handleInputChange: handleInputChange, edit: edit}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TodoItem)