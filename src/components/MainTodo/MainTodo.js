import React, { useState} from 'react'


function MainTodo () {
    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todos')) || [
        {
            id: 1,
            text: 'Попробуйте ввести новое задание',
            state: ''
        }
    ])

    const [text, setText] = useState('')
    const [sortState, setSort] = useState('all')

    function addTodo(ev) {
        if (ev.keyCode === 13) {
            if (todo.length !== 0) {
                setTodo(
                    [...todo,
                        {
                            id: todo[todo.length - 1].id + 1,
                            text: text,
                            state: ''
                        }]
                )
            }
            else {
                setTodo([{
                    id: 1,
                    text: text,
                    state: ''
                }])
            }
            setText('')
        }
        localStorage.setItem('todos', JSON.stringify(todo))
    }

    function toggleAll() {
        let state = '';
        for (let item of todo) {
            if (item.state === '') {
                state = 'done'
            }
        }
        const newTodo = [...todo].filter(item => {
            item.state = state;
            return item
        })
        setTodo((newTodo))
        localStorage.setItem('todos', JSON.stringify(todo))
    }

    return(
        <section className="todo">
            <input className="toggle-all" type="checkbox" onClick={() => toggleAll()}/>
            <input className="new-todo" type="text" placeholder="Что нужно сделать?" autoFocus value={text} onKeyDown={(ev) => addTodo(ev)} onChange={(e)=>setText(e.target.value)}/>
            <TodoList todo={todo} setTodo={setTodo} sortState={sortState}/>
            <Footer todo={todo} sortState={sortState} setSort={setSort} setTodo={setTodo}/>
        </section>
    )
}

function TodoList({todo, setTodo, sortState}) {
    const [editting, setEdit] = useState(null)
    const [editText, setEditText] = useState('')
    localStorage.setItem('todos', JSON.stringify(todo))
    let viewTodo
    if (todo !== null) {
        viewTodo = [...todo].filter(item => {
            if (sortState === 'all') {
                return item
            } else if (item.state === sortState) {
                return item
            }
            return null
        })
    }

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
        localStorage.setItem('todos', JSON.stringify(todo))
    }

    function changeState(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                if (item.state === '') {
                    item.state = 'done'
                }
                else {
                    item.state = ''
                }
            }
            return item
        })
        setTodo(newTodo)
        localStorage.setItem('todos', JSON.stringify(todo))
    }

    function changeText(e, id) {
        if (e.keyCode === 13) {
            if (editText.length === 0) {
                deleteTodo(id)
            }
            else {
                let newTodo = [...todo].filter(item => {
                    if (item.id === id) {
                        item.text = editText
                    }
                    return item
                })
                setTodo(newTodo)
                setEdit('')
                localStorage.setItem('todos', JSON.stringify(todo))
            }
        }
    }

    return(
        <ul className="todolist">
            {
                viewTodo.map(item => (
                    <li key={item.id}>
                        <div className={'item {state}'.replace('{state}', item.state)}>
                            <input className="toggle" type="checkbox"
                                   onClick={() => changeState(item.id)}/>
                            {
                                item.id === editting
                                    ?
                                    <input
                                        className={"edit"}
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        onBlur={() => setEdit('')}
                                        onKeyDown={(e) => changeText(e, item.id)}
                                        autoFocus={true}
                                    />
                                    :
                                    <div>
                                        <p onClick={() => {
                                            setEdit(item.id);
                                            setEditText(item.text)
                                        }}>{item.text}</p>
                                        <button className={"destroy"} onClick={() => deleteTodo(item.id)}></button>
                                    </div>
                            }
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

function Footer({todo, sortState, setSort, setTodo}){
    let count = 0;
    if (todo !== null) {
        for (let item of todo) {
            if (item.state === '') {
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

    function clearDone() {
        const newTodo = [...todo].filter(item => {
            if (item.state === '') {
                return item;
            }
            return null
        })
        setTodo(newTodo)
        localStorage.setItem('todos', JSON.stringify(todo))
    }

    return(
        <div className="footer">
            <p className="counter">{count + str}</p>
            <div className="buttons">
                {sortState === 'all' ? <a className="all checked" onClick={() => setSort('all')}>Все</a> : <a className="all" onClick={() => setSort('all')}>Все</a>}
                {sortState === '' ? <a className="active checked" onClick={() => setSort('')}>Активные</a> : <a className="active" onClick={() => setSort('')}>Активные</a>}
                {sortState === 'done' ? <a className="complete checked" onClick={() => setSort('done')}>Выполненные</a> : <a className="complete" onClick={() => setSort('done')}>Выполненные</a>}
            </div>
            <a className="clear" onClick={() => clearDone()}>Очистить выполненные</a>
        </div>
    )
}

export default MainTodo