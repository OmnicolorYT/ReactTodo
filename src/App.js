import React, {Component} from "react"
import Header from './components/Header/Header'
import MainTodo from "./components/MainTodo/MainTodo";
import styles from './App.scss'

class App extends Component{
    render () {
        return (
            <div className="App">
                <Header/>
                <MainTodo/>
            </div>
        );
    }
}

export default App;
