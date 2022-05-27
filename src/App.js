import React, {Component} from "react"
import Header from './components/Header/Header'
import MainTodo from "./components/MainTodo/MainTodo";

class App extends Component{
    constructor(props) {
        super(props);
    }

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
