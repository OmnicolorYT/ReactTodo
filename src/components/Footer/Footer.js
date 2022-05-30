import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeTodo, switchSort, clearDone} from "../../actions";
import {bindActionCreators} from "redux";
import './Footer.scss'

class Footer extends Component {



    render () {
        let count = 0;
        if (this.props.todos !== null) {
            for (let item of this.props.todos) {
                if (!item.complete) {
                    count += 1;
                }
            }
        }

        let str;
        if (count % 10 === 1 && count % 100 !== 11) {
            str = " задание осталось"
        }
        else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 12 || count % 100 > 14)) {
            str = " задания осталось"
        }
        else {
            str = " заданий осталось"
        }
        return (
            <div className="footer">
                <p className="counter">{count + str}</p>
                <div className="buttons">
                    {this.props.ui.sort === 'ALL' ? <a className="all checked" onClick={() => this.props.switchSort('ALL')}>Все</a> : <a className="all" onClick={() => this.props.switchSort('ALL')}>Все</a>}
                    {this.props.ui.sort === 'ACTIVE' ? <a className="active checked" onClick={() => this.props.switchSort('ACTIVE')}>Активные</a> : <a className="active" onClick={() => this.props.switchSort('ACTIVE')}>Активные</a>}
                    {this.props.ui.sort === 'DONE' ? <a className="complete checked" onClick={() => this.props.switchSort('DONE')}>Выполненные</a> : <a className="complete" onClick={() => this.props.switchSort('DONE')}>Выполненные</a>}
                </div>
                <a className="clear" onClick={() => this.props.clearDone()}>Очистить выполненные</a>
            </div>
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
    return bindActionCreators({removeTodo: removeTodo, switchSort: switchSort, clearDone: clearDone}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Footer)