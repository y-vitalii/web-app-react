import React from 'react';
import './App.css';
import Header from "../header/Header";


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="App">
                <Header />
            </div>
        )
    }
}


export default App;
